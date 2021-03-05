const User = require("../models/user.js");
const bcrypt = require("bcrypt");

// this function is called to create a user in the database
const create_user = async (req, res) => {
  // request body data
  const user_data = req.body;
  let user;

  try {
    const new_user = new User(user_data);
    user = await new_user.save();
  } catch (e) {
    res.send({ userCreated: false });
  }

  // api call result
  if (!user) return res.send({ userCreated: false });

  const user_token = await user.generateToken();
  res.send({ user_created: true, token: user_token });
};

// this function is called to log a user into his account
const login_user = async (req, res) => {
  // request body data
  const user_data = req.body;

  try {
    const searched_user_result = await User.findOne({ email: user_data.email });

    if (!searched_user_result) throw new Error("Unregistered email address");

    const password_check_result = await bcrypt.compare(
      user_data.password,
      searched_user_result.password
    );

    if (!password_check_result) throw new Error("Invalide login");

    const user_token = await searched_user_result.generateToken();
    res.send({ valid_credentials: true, user_token });
  } catch (e) {
    res.send({ valid_credentials: false });
  }
};

// get user profile
const get_user = (req, res) => {
  const user = req.body.user;
  res.send({ auth_result: true, user });
};

// get a user profile by email
const get_user_by_email = async (req, res) => {
  const user_email = req.body.email;
  let user;

  try {
    user = await User.findOne({ email: user_email });
    if (user == null) throw new Error("User not found!");

    res.send({ user });
  } catch (e) {
    res.send({ user: null });
  }
};

module.exports = {
  create_user,
  login_user,
  get_user,
  get_user_by_email,
};
