const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minlength: 3,
    maxlength: [30, "Your name should not exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  track: {
    type: String,
    required: [true, "please input your track"],
  },
  slack_name: {
    type: String,
    unique: true,
    required: [true, "slack username is mandatory for the team members."],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
