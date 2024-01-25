import { RequestHandler } from 'express';
import { PostModel, PostSchema } from '../models/Post';

export const createPost: RequestHandler = async (req, res) => {
  try {
    const requestBody: Required<Pick<PostSchema, 'userId' | 'desc' | 'img'>> = req.body;

    const newPost = new PostModel(requestBody);
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const updatePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const requestBody: Required<Pick<PostSchema, 'userId' | 'desc' | 'img'>> = req.body;
    const { postId } = req.params;

    const searchedPost = await PostModel.findById(postId);
    if (searchedPost === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    if (searchedPost.userId === requestBody.userId) {
      await searchedPost.updateOne({
        $set: requestBody,
      });
      return res.status(200).json('Successfully updated your post');
    } else {
      return res.status(403).json('You can only update your posts.');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const deletePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const requestBody: Required<Pick<PostSchema, 'userId'>> = req.body;
    const { postId } = req.params;

    const searchedPost = await PostModel.findById(postId);
    if (searchedPost === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    if (searchedPost.userId === requestBody.userId) {
      await searchedPost.deleteOne();
      return res.status(204).json('Your post was successfully deleted');
    } else {
      return res.status(403).json('You can only delete existing post');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getParticularPost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const { postId } = req.params;

    const searchedPost = await PostModel.findById(postId);
    if (searchedPost === null) {
      return res.status(404).json('指定したIDの投稿が見つかりませんでした');
    }
    return res.status(200).json(searchedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
