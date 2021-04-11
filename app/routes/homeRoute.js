// path module
const path = require("path");
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const user = req.body.user
  res.render("index", {user, page:"home"});
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/static/html/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/static/html/sign-up.html"));
});

router.get("/resetpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/static/html/reset_password.html"));
})

router.get("/createproperty", authMiddleware, (req, res) => {
  const user = req.body.user
  res.render("add_property", {user, page: "home"})
})

router.get("/profile", authMiddleware, async (req, res) => {
  const user = req.body.user
    res.render("profile", {user, page: "profile"})
});

router.get("/items", authMiddleware, async (req, res) => {
  const user = req.body.user
    res.render("items", {user, page: "item"})
});

router.get("/additem", authMiddleware, async (req, res) => {
  const user = req.body.user
    res.render("add_item", {user, page: "item"})
});

router.get("/purchase", authMiddleware, async (req, res) => {
  const user = req.body.user
    res.render("cart", {user, page: "item"})
});

router.get("/kubobot", authMiddleware, async (req, res) => {
  const user = req.body.user
    res.render("bot", {user, page: "kubobot"})
});

module.exports = router;
