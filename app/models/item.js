const mongoose = require("mongoose");

const item_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10
  },
  price: {
    type: String,
    required: true,
    trim: true,
    maxlength: 19
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  quantity: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2
  },
  item_image: {
    type: Buffer,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Item = mongoose.model("Item", item_schema);

module.exports = Item;
