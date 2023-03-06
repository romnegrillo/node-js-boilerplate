const Blog = require("../models/blogModel");

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      status: "success",
      length: blogs.length,
      data: {
        blogs: blogs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

exports.getBlog = async (req, res) => {
  res.status(200).json({
    function: "getBlog",
  });
};

exports.createBlog = async (req, res) => {
  res.status(200).json({
    function: "createBlog",
  });
};

exports.updateBlog = async (req, res) => {
  res.status(200).json({
    function: "updateBlog",
  });
};

exports.deleteBlog = async (req, res) => {
  res.status(200).json({
    function: "deleteBlog",
  });
};
