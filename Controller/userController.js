const User = require("../Model/userModel");

// create new user
const createUser = async (req, res, next) => {
  const { name, email, track, slack_name } = req.body;

  if (!name || !email || !track || !slack_name) {
    return res
      .status(404)
      .json({ message: "Provide all credentials for User" });
  }

  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    return res.status(404).json({ message: "Email alreaady used" });
  }

  const user = await User.create({
    name,
    email,
    track,
    slack_name,
  });

  res.status(201).json({
    message: "Person successfully created",
    user,
  });
};

// Find one user by id
const findUser = async (req, res, next) => {
  const { user_id } = req.params; // Assuming you extract the user ID from the URL

  const user = await User.findOne({ _id: user_id });

  if (!user) {
    return res.status(404).json({ message: "Person not found" });
  }
  res.status(200).json({
    message: "Person successfully found",
    user,
  });
};

// update single user by the id
const updateUser = async (req, res, next) => {
  const { user_id } = req.params;
  const user = await User.findOneAndUpdate({ _id: user_id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return res.status(404).json({ message: "Person not found" });
  }
  res.status(200).json({
    message: "Person successfully found and Updated",
    user,
  });
};

// delete single user
const deleteUser = async (req, res, next) => {
  const { user_id } = req.params;
  const user = await User.findOneAndDelete({ _id: user_id });

  if (!user) {
    return res.status(404).json({ message: "Person not found" });
  }

  // await product.remove();
  res.status(200).json({
    success: true,
    message: "Person successfully deleted",
  });
};

module.exports = {
  createUser,
  findUser,
  updateUser,
  deleteUser,
};
