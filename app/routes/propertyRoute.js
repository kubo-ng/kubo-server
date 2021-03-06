const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const { create_property } = require("../controllers/propertyController.js");

const router = express.Router();

router.post("/create", authMiddleware, create_property);

module.exports = router;
