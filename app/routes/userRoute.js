const express = require("express");
const router = express.Router();
const {
  create_user,
  login_user,
  get_user,
  get_user_by_email_or_id,
  update_user_info
} = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// create a new user in the database
router.post("/signup", create_user);

// log in an existing user
router.post("/login", login_user);

// get user info
router.get("/profile", authMiddleware, get_user);

// get user info by email or id
router.get("/user", authMiddleware, get_user_by_email_or_id);

// update user info
router.post("/profile/update", authMiddleware, update_user_info)

module.exports = router;
