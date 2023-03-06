const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    datePosted: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
