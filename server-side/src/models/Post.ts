import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
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

export default mongoose.model('Post', PostSchema);
// module.exports = mongoose.model('Post', PostSchema);
