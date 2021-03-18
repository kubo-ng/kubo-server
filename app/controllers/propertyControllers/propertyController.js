const {
  create_property,
  get_property_by_id,
  delete_property_id,
} = require("./v1.0/propertyController.js");

const create_property_ = async (req, res) => {
  const version = req.body.version;
  if (version === "v1.0") return create_property(req, res);
};

const get_property_by_id_ = async (req, res) => {
  const version = req.body.version;
  if (version === "v1.0") return get_property_by_id(req, res);
};

const delete_property_id_ = async (req, res) => {
  const version = req.body.version;
  if (version === "v1.0") return delete_property_id(req, res);
};

module.exports = {
  create_property_,
  get_property_by_id_,
  delete_property_id_,
};
