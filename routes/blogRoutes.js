const express = require("express");
const blogController = require("../controllers/blogController");

const blogRouter = express.Router();

blogRouter.get("/", blogController.getAllBlog);
blogRouter.get("/:id", blogController.getBlog);
blogRouter.post("/", blogController.createBlog);
blogRouter.patch("/:id", blogController.updateBlog);
blogRouter.delete("/:id", blogController.deleteBlog);

module.exports = blogRouter;
