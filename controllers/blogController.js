exports.getAllBlog = (req, res) => {
  res.status(200).json({
    function: "getAllBlog",
  });
};

exports.getBlog = (req, res) => {
  res.status(200).json({
    function: "getBlog",
  });
};

exports.createBlog = (req, res) => {
  res.status(200).json({
    function: "createBlog",
  });
};

exports.updateBlog = (req, res) => {
  res.status(200).json({
    function: "updateBlog",
  });
};

exports.deleteBlog = (req, res) => {
  res.status(200).json({
    function: "deleteBlog",
  });
};
