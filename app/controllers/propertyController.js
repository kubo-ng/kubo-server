const Property = require("../models/property.js");

const create_property = async (req, res) => {
  const property_info = req.body.property_info;

  try {
    const property = new Property(property_info);

    if (!property) throw new Error("Failed to create new property.");

    await property.save();
    res.send({ propertyCreated: true });
  } catch (e) {
    res.send({
      propertyCreated: false,
      error: "Something went wrong while trying to create a property.",
    });
  }
};

const get_property_by_id = async (req, res) => {
  const property_id = req.query.id;

  try {
    const property = await Property.findById(property_id);
    if (!property) throw new Error("Could not find user.");
    res.send({property});
  } catch (e) {
    res.send({ property: null, error: "Failed to get user with id provided." });
  }
};

module.exports = {
  create_property,
  get_property_by_id,
};
