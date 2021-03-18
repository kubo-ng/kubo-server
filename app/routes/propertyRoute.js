const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  create_property,
  get_property_by_id,
  delete_property_id
} = require("../controllers/propertyControllers/v1.0/propertyController.js");

const router = express.Router();

// create a new property
router.post("/create", authMiddleware, create_property);

// get a property frim the database when you pass the id as query parameter
router.get("/", authMiddleware, get_property_by_id);

// delete a property from the server
router.delete("/delete", authMiddleware, delete_property_id);

module.exports = router;
