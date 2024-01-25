import { RequestHandler } from 'express';
import { UserModel, UserSchema } from '../models/User';

export const registerUser: RequestHandler = async (req, res) => {
  try {
    const requestBody: Pick<UserSchema, 'username' | 'email' | 'password'> = req.body;

    const newUser = await new UserModel(requestBody);
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const requestBody: Pick<UserSchema, 'email' | 'password'> = req.body;

    const user = await UserModel.findOne({ email: requestBody.email });
    if (!user) return res.status(404).send('The user does not exist');

    const isValidPassword = requestBody.password === user.password;
    if (!isValidPassword) return res.status(400).json('password is wrong');

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
