const router = require('express').Router();
const Post = require('../models/Post');

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
      return res.status(200).json('Successfully posted')
    } else {
      return res.status(403).json('You can only update your posts.')
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
      return res.status(200).json('Your post was successfully deleted')
    } else {
      return res.status(403).json('You can only delete existing post')
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// get a particular post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post)
  } catch (err) {
    return res.status(403).json(err)
  }
})

// add like to a particular post

module.exports = router;
