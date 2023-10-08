const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Profile = require("../models/profileModel");
// @route POST users/register with profile creation
// @desc Register a user
// @access Public

router.post("/user/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "email or password is required", success: false });
    }
    
    // Create a new profiledata instance
    const profiledata = new Profile({});
    await profiledata.save();

    // Create a new user and set the profile field with the profiledata _id
    const hashed_pw = await bcryptjs.hash(password, 10);
    const user = new User({
      email: email,
      password: hashed_pw,
      profile: profiledata._id, // Set the profile field with the profiledata _id
    });
    await user.save();

    res.status(201).json({
      msg: "user registered successfully",
      success: true,
      data: user,
      profile: profiledata,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Internal server error", success: false });
  }
});

// router for register
router.post("/users/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    User.findOne({ email: email }).then((user_email) => {
      if (user_email != null) {
        res.status(400).json({ msg: "email already exists", success: false });
        return;
      } else if (!email || !password) {
        res
          .status(400)
          .json({ msg: "email or password is required", success: false });
        return;
      } else {
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

// routes for login
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(400)
        .json({ msg: "email or password is not correct", success: false });
      return;
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    // console.log(isMatch);
    if (!isMatch) {
      res
        .status(400)
        .json({ msg: "email or password is not correct", success: false });
      return;
    }

    const token = jwt.sign({ _id: user._id }, "neosphere", {
      expiresIn: "30d",
    });

    res.json({ msg: "login successful", success: true, token, data: user });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

module.exports = router;
