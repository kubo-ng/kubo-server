const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const { create_property, get_property_by_id } = require("../controllers/propertyController.js");

const router = express.Router();

router.post("/create", authMiddleware, create_property);

router.get("/test", authMiddleware, get_property_by_id)

module.exports = router;
