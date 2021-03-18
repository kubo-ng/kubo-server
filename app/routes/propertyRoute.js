const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const versionMiddleware = require("../middlewares/versionMiddleware.js")
const {
  create_property_,
  get_property_by_id_,
  delete_property_id_
} = require("../controllers/propertyControllers/propertyController.js");

const router = express.Router();

// create a new property
router.post("/create", versionMiddleware, authMiddleware, create_property_);

// get a property frim the database when you pass the id as query parameter
router.get("/", versionMiddleware, authMiddleware, get_property_by_id_);

// delete a property from the server
router.delete("/delete", versionMiddleware, authMiddleware, delete_property_id_);

module.exports = router;
