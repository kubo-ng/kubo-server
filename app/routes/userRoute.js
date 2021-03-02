const express = require("express");
const router = express.Router();
const {create_user, login_user, get_user} = require("../controllers/userController.js")
const authMiddleware = require("../middlewares/authMiddleware.js")

// create a new user in the database
router.post("/signup", create_user);

// log in an existing user
router.post("/login", login_user)

// get user info
router.get("/profile", authMiddleware, get_user)

module.exports = router;
