const {
  create_user,
  login_user,
  logout_user,
  get_user,
  get_user_by_email_or_id,
  update_user_info,
} = require("./v1.0/userController.js");

// this function is called to create a user in the database
const create_user_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return create_user(req, res);
};

// this function is called to log a user into his account
const login_user_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return login_user(req, res);
};

// this function is called to log a user out of his account
const logout_user_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return logout_user(req, res);
};

// get user profile
const get_user_ = (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return get_user(req, res);
};

// get a user profile by email and id
const get_user_by_email_or_id_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return get_user_by_email_or_id(req, res);
};

// update user info
const update_user_info_ = async (req, res) => {
  /*
    This retrieves the api version passed by the developer and
    calls the version of the function in that version
  if the api version does not exit it sends an error message.
  */

  const version = req.body.version;
  if (version === "v1.0") return update_user_info(req, res);
};

module.exports = {
  create_user_,
  login_user_,
  logout_user_,
  get_user_,
  get_user_by_email_or_id_,
  update_user_info_,
};
