const {
  create_item,
  get_item_by_id,
  delete_item_id,
} = require("./v1.0/itemController.js");

// call this function to create an item
const create_item_ = async (req, res) => {
    /*
      This retrieves the api version passed by the developer and
      calls the version of the function in that version
    if the api version does not exit it sends an error message.
    */

  const version = req.body.version;
  if (version === "v1.0") return create_item(req, res);
};

// call this function to retrieve an item by its id
const get_item_by_id_ = async (req, res) => {
    /*
      This retrieves the api version passed by the developer and
      calls the version of the function in that version
    if the api version does not exit it sends an error message.
    */

  const version = req.body.version;
  if (version === "v1.0") return get_item_by_id(req, res);
};

// call this function to delete an item by id
const delete_item_id_ = async (req, res) => {
    /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
    if the api version does not exit it sends an error message.
    */

  const version = req.body.version;
  if (version === "v1.0") return delete_item_id(req, res);
};

module.exports = {
  create_item_,
  get_item_by_id_,
  delete_item_id_,
};
