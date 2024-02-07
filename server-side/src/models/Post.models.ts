import mongoose from 'mongoose';
import { PostSchema } from '../types/post.types';

const postSchema = new mongoose.Schema<PostSchema>(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 200,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

export const PostModel = mongoose.model('Post', postSchema);