import { Router } from 'express';
import { UserModel } from '../models/User';

const router = Router();

// register user
router.post('/register', async (req, res) => {
  try {
    const newUser = await new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).send('The user does not exist');

    const vaildedPassword = req.body.password === user.password;
    if (!vaildedPassword) return res.status(400).json('password is wrong');

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
