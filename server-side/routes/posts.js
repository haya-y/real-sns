const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// create a post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json('Successfully posted');
    } else {
      return res.status(403).json('You can only update your posts.');
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json('Your post was successfully deleted');
    } else {
      return res.status(403).json('You can only delete existing post');
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// get a particular post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

/**
 * update 'like' of a post
 * @param {*} alreadyLiked 
 * @param {*} postId 
 * @param {*} userId 
 * @returns 
 */
const updateLikeStatus = async (alreadyLiked, postId, userId) => {
  const updateOperator = alreadyLiked ? '$pull' : '$push';
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      [updateOperator]: {
        likes: userId,
      },
    },
    { returnDocument: 'after' },
  );
  return { likeNumber: updatedPost.likes.length, isPushed: !alreadyLiked };
};

// add or remove 'like' of a post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const alreadyLiked = post.likes.includes(req.body.userId);
    const result = await updateLikeStatus(alreadyLiked, req.params.id, req.body.userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get 'like' status of a post
router.get('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const alreadyLiked = post.likes.includes(req.query.userId);
    return res.status(200).json(alreadyLiked);
  } catch (err) {
    return res.status(500).json(err);
  }
})

// get posts of timeline of profile page
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get posts of timeline
router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    // get all posts of following friends
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      }),
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
