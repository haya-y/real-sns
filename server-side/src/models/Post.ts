import mongoose from 'mongoose';

interface Post {
  userId: string;
  desc?: string;
  img?: string;
  likes?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<Post>(
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
