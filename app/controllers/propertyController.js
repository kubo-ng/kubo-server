const Property = require("../models/property.js");

const create_property = async (req, res) => {
  const property_info = req.body.property_info;
  property_info.owner = req.body.user._id;

  try {
    const property = new Property(property_info);

    if (!property) throw new Error("Failed to create new property.");

    await property.save();
    res.send({ propertyCreated: true, id: property._id });
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
    if (!property)
      throw new Error("Could not find property with the id provided.");
    res.send({ property });
  } catch (e) {
    res.send({ property: null, error: e.message });
  }
};

const delete_property_id = async (req, res) => {
  const property_id = req.query.id;
  let is_property_deleted;

  try {
    const property = await Property.findByIdAndDelete(property_id);
    if (!property)
      throw new Error("Could not delete property with id provided.");

    is_property_deleted = true;
    res.send({ is_property_deleted });
  } catch (e) {
    is_property_deleted = false;
    res.send({
      is_property_deleted,
      error: "Could not delete property with id provided.",
    });
  }
};

module.exports = {
  create_property,
  get_property_by_id,
  delete_property_id,
};
