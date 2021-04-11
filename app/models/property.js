const mongoose = require("mongoose");

const property_schema = mongoose.Schema({
  state: {
    type: String,
    required: true,
    trim: true,
  },
  local_government: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    maxlength: 19,
    minlength: 19,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  deal_type: {
    type: String,
    required: true,
    trim: true,
    validator(value) {
      if (
        (value !== "sell" || value !== "lease" || value !== "partnership",
        value !== "employ")
      )
        throw new Error("Invalide deal type specified!");
    },
  },
  size: {
    type: Number,
    required: true,
    trim: true,
  },
  duration_of_deal: {
    type: Number,
    required: true,
    trim: true,
  },
  property_image: {
    type: Buffer,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Property = mongoose.model("Property", property_schema);

module.exports = Property;
