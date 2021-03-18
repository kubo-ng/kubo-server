const get_version = (req, res, next) => {
  /*
  This middleware function checks the api version indicated by the developer
  and passses it as a parameter in the req.body object
  it sends an error message if no version is passed.
  */
  try {
    const version = req.query.version;
    if (!version) throw new Error("No valid api version passed.");
    req.body.version = version;
    next()
  } catch (e) {
    res.send({ error: e.message });
  }
};

module.exports = get_version;
