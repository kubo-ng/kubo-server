const Property = require("../../../models/property.js");

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

const get_property_by_id_or_name = async (req, res) => {
  const property = req.query.property

  try {
    const property_by_name = await Property.find({state: property})
    if (property_by_name.length === 0){
      const property_by_id = await Property.findById(property);
      if (!property_by_id) throw new Error("Could not find a property with the name or id provided.");
      return res.send({ property: property_by_id });
    }
    res.send(property_by_name)
  } catch (e) {
    res.send({ property: null, error: e.message });
  }
};

// call this function to get a list of properties for the user
const get_user_property_list = async (req, res) => {
  const user = req.body.user;
  try {
    const limit = Number.parseInt(req.query.limit);
    const page = Number.parseInt(req.query.page);

    if (limit > 0 && page > 0) {
      const startFrom = (page - 1) * limit;
      await user.populate("properties").execPopulate();
      res.send(user.properties.slice(startFrom, limit + startFrom));
    } else throw new Error("Invalid value for either limit or page passed.");
  } catch (e) {
    res.send({ error: e.message });
  }
};

const get_property_list = async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit);
    const page = Number.parseInt(req.query.page);

    if (limit > 0 && page > 0) {
      const startFrom = (page - 1) * limit;
      const properties = await Property.find().limit(limit).skip(startFrom);
      res.send(properties);
    } else throw new Error("Invalid value for either limit or page passed.");
  } catch (e) {
    res.send({ error: e.message });
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
  get_property_by_id_or_name,
  get_user_property_list,
  get_property_list,
  delete_property_id,
};
