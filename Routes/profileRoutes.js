const express = require("express");
const router = express.Router();
const Profile = require("../models/profileModels");
const domain = "http://localhost:5000";
const auth = require("../auth/auth");
const uploadsServices = require("../services/uploadsServices");

// @route POST api/profile by taking the ref of the user
// @desc Create a profile
// @access Private
router.post(
  "/profile/create",
  uploadsServices.profileImage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    const data = req.body;
    const file = req.file;
    try {
      if (!file || file.length === 0) {
        return res.status(400).send("Please upload an image");
      }
      const image = domain + "public/profileUploads/" + file.filename;
      const profile = new Profile({
        user: req.userData._id,
        name: data.name,
        phone: data.phone,
        age: data.age,
        address: data.address,
        bio: data.bio,
        image: image,
      });
      await profile.save();
      res.status(200).json({ msg: "Profile created successfully", profile });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;