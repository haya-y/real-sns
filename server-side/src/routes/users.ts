import { Router } from 'express';
import User from '../models/User';

const router = Router();

// Update user information
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json('Updated user info');
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

// get user information with query parameter
router.get('/', async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId ? await User.findById(userId) : await User.findOne({ username });
    if (user === null) {
      return res.status(404).json('指定したユーザーが見つかりませんでした');
    }
    // TODO user._docとなっていた書き方を見直し
    // const { password, updatedAt, ...other } = user._doc;
    const { password, ...other } = user;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Follow user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const targetUser = await User.findById(req.params.id);
      const sourceUser = await User.findById(req.body.userId);
      if (targetUser === null || sourceUser === null) {
        return res.status(404).json('指定したユーザーが見つかりませんでした');
      }
      if (!targetUser.followers.includes(req.body.userId)) {
        await targetUser.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await sourceUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json('Successfully Followed');
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

// Unfollow user
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const targetUser = await User.findById(req.params.id);
      const sourceUser = await User.findById(req.body.userId);
      if (targetUser === null || sourceUser === null) {
        return res.status(404).json('指定したユーザーが見つかりませんでした');
      }
      if (targetUser.followers.includes(req.body.userId)) {
        await targetUser.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await sourceUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        return res.status(200).json('Successfully Unfollowed');
      } else {
        return res.status(403).json('Already unfollowing');
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json('Can not unfollow yourself');
  }
});

export default router;
