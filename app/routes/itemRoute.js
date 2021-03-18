const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const versionMiddleware = require("../middlewares/versionMiddleware.js");
const {
  create_item_,
  get_item_by_id_,
  delete_item_id_,
} = require("../controllers/itemControllers/itemController.js");

const router = express.Router();

// create an item in the database
router.post("/create", versionMiddleware, authMiddleware, create_item_);

// get an item when an id is provided in the query string
router.get("/", versionMiddleware, authMiddleware, get_item_by_id_);

// delete an item
router.delete("/delete", versionMiddleware, authMiddleware, delete_item_id_);

module.exports = router;
