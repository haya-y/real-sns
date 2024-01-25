import { RequestHandler } from 'express';
import { PostModel, PostSchema } from '../models/Post';

/**
 * update 'like' of a post
 * @param alreadyLiked
 * @param postId
 * @param userId
 * @returns
 */
const addOrRemoveLike = async (alreadyLiked: boolean, postId: string, userId: string) => {
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

export const updateLikeStatus: RequestHandler<{ postId: string }, any, Required<Pick<PostSchema, 'userId'>>> = async (
  req,
  res,
) => {
  try {
    const { userId } = req.body;
    const { postId } = req.params;

    const post = await PostModel.findById(postId);
    if (post === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    const alreadyLiked = (post.likes ?? []).includes(userId);
    const result = await addOrRemoveLike(alreadyLiked, postId, userId);
    return result === null
      ? res.status(404).json('投稿から指定したユーザーが見つかりませんでした')
      : res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getLikeStatus: RequestHandler<{ postId: string }, any, any, { userId: string }> = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.query;

    const searchedPost = await PostModel.findById(postId);
    if (searchedPost === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    const alreadyLiked = (searchedPost.likes ?? []).includes(userId);
    return res.status(200).json(alreadyLiked);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
