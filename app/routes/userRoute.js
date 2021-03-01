const express = require("express");
const router = express.Router();
const {create_user} = require("../controllers/userController.js")

// create a new user in the database
router.post("/signup", create_user);

module.exports = router;
