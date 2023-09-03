const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// router for register
router.post("/users/register", (req, res) => {
  const email = req.body.email;
  try {
    User.findOne({ email: email }).then((user_email) => {
      if (user_email != null) {
        res.status(400).json({ msg: "email already exists", success: false });
        return;
      } else {
        const password = req.body.password;
        bcryptjs.hash(password, 10, (e, hashed_pw) => {
          if (e) {
            res.status(500).json({ msg: e, success: false });
            return;
          } else {
            const data = new User({
              email: email,
              password: hashed_pw,
            });
            data.save().then((data) => {
              res.json({
                msg: "user registered successfully",
                success: true,
                data,
              });
            });
          }
        });
      }
    });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

// router for login
router.post("/user/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    User.findOne({ email: email }).then((user_data) => {
      if (user_data == null) {
        res.status(400).json({ msg: "User does not exist", success: false });
        return;
      }
      bcryptjs.compare(password, user_data.password, (e, result) => {
        if (result) {
          const token = jwt.sign({ _id: user_data._id }, "techlearn", {
            expiresIn: "30d",
          });

          res.json({
            msg: "Login successful",
            success: true,
            token: token,
            data: user_data,
          });
        } else {
          res
            .status(400)
            .json({ msg: "Password does not match", success: false });
        }
      });
    });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

module.exports = router;