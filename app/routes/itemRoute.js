const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const { create_item } = require("../controllers/itemController.js");
const router = express.Router();

router.post("/create", authMiddleware, create_item);

module.exports = router;
