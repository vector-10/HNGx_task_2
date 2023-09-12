const express = require("express");
const router = express.Router();
const {
  createUser,
  findUser,
  updateUser,
  deleteUser,
} = require("../Controller/userController");

router.route("/").post(createUser);

router.route("/:user_id").get(findUser).put(updateUser).delete(deleteUser);

module.exports = router;
