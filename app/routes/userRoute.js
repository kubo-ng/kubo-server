const express = require("express");
const router = express.Router();
const {
  create_user,
  login_user,
  get_user,
  get_user_by_email,
} = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// create a new user in the database
router.post("/signup", create_user);

// log in an existing user
router.post("/login", login_user);

// get user info
router.get("/profile", authMiddleware, get_user);

// get user info by email
router.get("/userbyemail", authMiddleware, get_user_by_email);

module.exports = router;
