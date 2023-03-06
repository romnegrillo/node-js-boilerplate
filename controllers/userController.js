exports.getAllUser = (req, res) => {
  res.status(200).json({
    function: "getAllUser",
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    function: "getUser",
  });
};

exports.createUser = (req, res) => {
  res.status(200).json({
    function: "createUser",
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    function: "updateUser",
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    function: "deleteUser",
  });
};
