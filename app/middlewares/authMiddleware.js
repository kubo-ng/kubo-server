const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const authMiddleware = async (req, res, next) => {

  /*
  get token passed through the headers
  verify if the jwt token sent is valid 
  throw an error and return false for auth_result if it is not
  continue with the request if it is
  */
 
  try {
    const auth_token = req.cookies.token;

    const jwt_data = jwt.verify(auth_token, "supersecretkey");
    const user_id = jwt_data.id;
    const user = await User.findOne({
      _id: user_id,
      "tokens.token": auth_token,
    });

    if (user == null) throw new Error("Auth failed!");
    req.body.user = user;
    next();
  } catch (e) {
    res.status(401).redirect("/login");
  }
};

module.exports = authMiddleware;
