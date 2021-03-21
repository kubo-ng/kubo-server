const {
  create_property,
  get_property_by_id,
  get_property_list,
  delete_property_id,
  get_user_property_list
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

// call this function to retrieve a list of propeties for a user
const get_user_property_list_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return get_user_property_list(req, res);
};

const get_property_list_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return get_property_list(req, res);
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
  get_property_list_,
  get_user_property_list_,
  delete_property_id_,
};
