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
  } catch (e) {}

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
    res.send({ valid_credentials: true });
  } catch (e) {
    res.send({ valid_credentials: false });
  }
};

module.exports = {
  create_user,
  login_user,
};
