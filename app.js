const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

// Express app.
app = express();

// Middlewares.
app.use(morgan("dev"));

// Routes.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

// Routers
app.use("/users", userRouter);
app.use("/blogs", blogRouter);
app.use((req, res) => {
  res.status(400).json({ message: "Resource not found." });
});

module.exports = app;
