import { Router } from 'express';
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

/**
 * update 'like' of a post
 * @param {*} alreadyLiked
 * @param {*} postId
 * @param {*} userId
 * @returns
 */
const updateLikeStatus = async (alreadyLiked: boolean, postId: string, userId: string) => {
  const updateOperator = alreadyLiked ? '$pull' : '$push';
  const updatedPost = await PostModel.findByIdAndUpdate(
    postId,
    {
      [updateOperator]: {
        likes: userId,
      },
    },
    { returnDocument: 'after' },
  );
  return updatedPost === null ? null : { likeNumber: (updatedPost.likes ?? []).length, isPushed: !alreadyLiked };
};

// add or remove 'like' of a post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    const alreadyLiked = (post.likes ?? []).includes(req.body.userId);
    const result = await updateLikeStatus(alreadyLiked, req.params.id, req.body.userId);
    return result === null
      ? res.status(404).json('投稿から指定したユーザーが見つかりませんでした')
      : res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get 'like' status of a post
router.get('/:id/like', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    const alreadyLiked = (post.likes ?? []).includes(String(req.query.userId));
    return res.status(200).json(alreadyLiked);
  } catch (err) {
    return res.status(500).json(err);
  }
});

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
