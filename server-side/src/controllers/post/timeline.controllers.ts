import { RequestHandler } from 'express';
import { PostModel } from '../../models/Post.models';
import { UserModel } from '../../models/User.models';
import { HomeTimelinePathParams, ProfileTimelinePathParams } from '../../types/post.types';

export const getTimelineOfProfile: RequestHandler<ProfileTimelinePathParams> = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await UserModel.findOne({ username });
    if (user === null) {
      return res.status(404).json('指定したユーザーが見つかりませんでした');
    }
    const posts = await PostModel.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getTimelineOfHome: RequestHandler<HomeTimelinePathParams> = async (req, res) => {
  try {
    const { userId } = req.params;

    const currentUser = await UserModel.findById(userId);
    if (currentUser === null) {
      return res.status(404).json('指定したユーザーが見つかりませんでした');
    }
    const userPosts = await PostModel.find({ userId: currentUser._id });
    // get all posts of following
    const friendPosts = await Promise.all(
      (currentUser.followings ?? []).map((friendId) => {
        return PostModel.find({ userId: friendId });
      }),
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
};
