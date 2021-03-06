const Property = require("../models/property.js");

const create_property = async (req, res) => {
  const property_info = req.body.property_info;

  try {
    const property = new Property(property_info);

    if (!property) throw new Error("Failed to create new property.");

    await property.save()
    res.send({propertyCreated: true})

  } catch (e) {
    res.send({
      propertyCreated: false,
      error: "Something went wrong while trying to create a property.",
    });
  }
};

module.exports = {
    create_property
};
