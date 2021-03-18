const {
  create_property,
  get_property_by_id,
  delete_property_id,
} = require("./v1.0/propertyController.js");

// call this function to create a property
const create_property_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return create_property(req, res);
};

// call this function to retrieve a property
const get_property_by_id_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return get_property_by_id(req, res);
};

// call this function to delete a property
const delete_property_id_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return delete_property_id(req, res);
};

module.exports = {
  create_property_,
  get_property_by_id_,
  delete_property_id_,
};
