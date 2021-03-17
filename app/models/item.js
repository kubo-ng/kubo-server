const mongoose = require("mongoose");

const item_schema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  item_image: {
    type: Buffer,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Item = mongoose.model("Item", item_schema);

module.exports = Item;
