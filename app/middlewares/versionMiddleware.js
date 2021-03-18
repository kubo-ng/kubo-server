const get_version = (req, res, next) => {
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
