const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const versionMiddleware = require("../middlewares/versionMiddleware.js")
const {
  create_user_,
  login_user_,
  get_user_,
  get_user_by_email_or_id_,
  update_user_info_,
} = require("../controllers/userControllers/userController")

const router = express.Router();

// create a new user in the database
router.post("/signup", versionMiddleware, create_user_);

// log in an existing user
router.post("/login", versionMiddleware, login_user_);

// get user info
router.get("/profile", versionMiddleware, authMiddleware, get_user_);

// get user info by email or id
router.get("/user", versionMiddleware, authMiddleware, get_user_by_email_or_id_);

// update user info
router.post("/profile/update", versionMiddleware, authMiddleware, update_user_info_);

module.exports = router;
