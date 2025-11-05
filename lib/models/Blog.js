import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  category: {
    type: String,
    required: true,
  },

  author_img: {
    type: String,
    required: true,
  },
});
const BlogModel = mongoose.models.Blog || mongoose.model("Blog", Schema);
export default BlogModel;

