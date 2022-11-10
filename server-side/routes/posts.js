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

// add like to a particular post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // if the post does not have like
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json('Successfully put like on the post');
    } else {
      // if the post already has like
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json('Successfully removed like from post');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get posts of timeline of profile page
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne(req.params.userName);
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
