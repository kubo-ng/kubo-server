const User = require("../models/user.js");

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
  res.send({ userCreated: true, token: user_token });
};

module.exports = {
  create_user,
};
