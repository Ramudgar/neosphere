const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

//guard
const verifyUser = function (req, res, next) {
  try {
    //we have to receive the token first from client..
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "neosphere");

    // console.log(data);
    // console.log(data._id);

    User.findOne({ _id: data._id })
      .populate("profile")
      .then(function (user) {
        if (!user) {
          return res.status(404).json({ msg: "User not found" });
        }

        console.log(user); // Check the user object here
        req.userData = user;
        next();
      })
      .catch(function (e) {
        console.error("Error populating profile:", e); // Log any errors here
        res.status(401).json({ msg: "You are not authorized" });
      });
  } catch (e) {
    res.status(401).json({ msg: "You are not authorised" });
  }
};

module.exports = { verifyUser };
