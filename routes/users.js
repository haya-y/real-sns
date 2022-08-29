const router = require('express').Router();
const User = require('../models/User');

// CRUD
// Update user information
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findOneAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('Updated user info');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can update only your info');
  }
});

// Delete user information
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Deleted user info');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can delete only your info');
  }
});

// Read user information
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Follow user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          }
        })
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          }
        })
        return res.status(200).json('Successfully Followed')
      } else {
        return res.status(403).json('Already following');
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json('Can not follow yourself');
  }
});

// router.get('/', (req, res) => {
//   res.send('user router');
// });

module.exports = router;
