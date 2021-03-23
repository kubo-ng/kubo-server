const User = require("../../../models/user.js");
const bcrypt = require("bcrypt");

// this function is called to create a user in the database
const create_user = async (req, res) => {
  // request body data
  const user_data = req.body.user_data;

  try {
    const new_user = new User(user_data);
    const user = await new_user.save();
    if (!user) throw new Error("Something went wrong while creating the user.");

    const user_token = await user.generateToken();
    res.send({
      user_created: true,
      token: user_token,
      id: user._id,
      email: user.email,
    });
  } catch (e) {
    res.send({
      userCreated: false,
      error: e.message,
    });
  }
};

// this function is called to log a user into his account
const login_user = async (req, res) => {
  // request body data
  const user_data = req.body.user_data;

  try {
    const searched_user_result = await User.findOne({ email: user_data.email });

    if (!searched_user_result) throw new Error("Unregistered email address");

    const password_check_result = await bcrypt.compare(
      user_data.password,
      searched_user_result.password
    );

    if (!password_check_result) throw new Error("Invalide login credentials.");

    const user_token = await searched_user_result.generateToken();
    res.send({
      valid_credentials: true,
      user_token,
    });
  } catch (e) {
    res.send({ valid_credentials: false, error: e.message });
  }
};

const logout_user = async (req, res) => {
  const user = req.body.user;
  const auth_token_bearer = req.headers.authorization;
  const auth_token = auth_token_bearer.slice(7, auth_token_bearer.length);
  try {
    const new_token_list = user.tokens.filter((value, index, arr) => {
      return value.token !== auth_token
    })
    user.tokens = new_token_list
    await user.save()
    res.send({logout: true})
  } catch (e) {res.send({logout: false, error: e.message})}
};

// get user profile
const get_user = (req, res) => {
  const user = req.body.user;

  res.send({ auth_result: true, user });
};

// get a user profile by email and id
const get_user_by_email_or_id = async (req, res) => {
  const user_identifier = req.query.identifier;
  let user;

  try {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email_regex.test(user_identifier)) {
      user = await User.findOne({ email: user_identifier });
      if (user == null) throw new Error("User not found!");

      res.send({ user });
    } else {
      user = await User.findById(user_identifier);
      res.send({ user });
    }
  } catch (e) {
    res.send({
      user: null,
      error: e.message,
    });
  }
};

// update user info
const update_user_info = async (req, res) => {
  const new_user_info = req.body.updated_info;
  const user = req.body.user;

  try {
    const info_keys = Object.keys(new_user_info);

    info_keys.forEach((key) => {
      const new_info = new_user_info[key];

      if (new_info) {
        user[key] = new_user_info[key];
      }
    });

    await user.save();
    res.send({ status: "done" });
  } catch (e) {
    res.send({ status: "failed", error: "Error while updating user info." });
  }
};

module.exports = {
  create_user,
  login_user,
  logout_user,
  get_user,
  get_user_by_email_or_id,
  update_user_info,
};
