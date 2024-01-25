import { Router } from 'express';
import { getLikeStatus, updateLikeStatus } from '../controllers/like.controllers';
import { createPost, deletePost, getParticularPost, updatePost } from '../controllers/post.controllers';
import { PostModel } from '../models/Post';
import { UserModel } from '../models/User';

const router = Router();

// create a post
router.post('/', createPost);

// update a post
router.put('/:postId', updatePost);

// delete a post
router.delete('/:postId', deletePost);

// get a particular post
router.get('/:postId', getParticularPost);

// add or remove 'like' of a post
router.put('/:postId/like', updateLikeStatus);

// get 'like' status of a post
router.get('/:postId/like', getLikeStatus);

// get posts of timeline of profile page
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    if (user === null) {
      return res.status(404).json('指定したユーザーが見つかりませんでした');
    }
    const posts = await PostModel.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get posts of timeline
router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.userId);
    if (currentUser === null) {
      return res.status(404).json('指定したユーザーが見つかりませんでした');
    }
    const userPosts = await PostModel.find({ userId: currentUser._id });
    // get all posts of following friends
    const friendPosts = await Promise.all(
      (currentUser.followings ?? []).map((friendId) => {
        return PostModel.find({ userId: friendId });
      }),
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
