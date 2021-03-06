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
    type: String,
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
    type: String,
    required: true,
    trim: true,
  },
  duration_of_deal: {
    type: String,
    required: true,
    trim: true,
  },
  property_image: {
    type: Buffer,
  },
});

const Property = mongoose.model("Property", property_schema);

module.exports = Property;
