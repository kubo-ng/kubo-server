const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  create_item,
  get_item_by_id,
  delete_item_id,
} = require("../controllers/itemController.js");
const router = express.Router();

// create an item in the database
router.post("/create", authMiddleware, create_item);
// get an item when an id is provided in the query string
router.get("/", authMiddleware, get_item_by_id);
router.delete("/delete", authMiddleware, delete_item_id);

module.exports = router;
