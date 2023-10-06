const express = require("express");
const router = express.Router();
const Profile = require("../models/profileModel");
const domain = "http://localhost:5000/";
const auth = require("../config/auth");
const uploadsServices = require("../services/uploadServices");

// @route POST profile/create by taking the ref of the user
// @desc Create a profile
// @access Private
router.post(
  "/profile/create",
  uploadsServices.profileImage.single("profilepic"),
  auth.verifyUser,
  async (req, res) => {
    const data = req.body;
    const file = req.file;

    try {
      const existingProfile = await Profile.findOne({ user: req.userData._id });

      if (existingProfile) {
        return res.status(400).json({ error: "Profile already exists" });
      }

      if (!file) {
        return res.status(400).json({ error: "Please upload an image" });
      }

      const image = domain + "public/profileUploads/" + file.filename;

      const profiledata = new Profile({
        user: req.userData._id,
        name: data.name,
        contact: data.contact,
        address: data.address,
        profilepic: image,
        dob: data.dob,
        flag: true,
      });

      await profiledata.save();

      return res.status(200).json({
        msg: "Profile created successfully",
        profiledata,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server Error" });
    }
  }
);

// code for update the profile by taking the ref of the user
// @route PUT profile/update
// @desc Update a profile
// @access Private
router.put(
  "/profile/update",
  uploadsServices.profileImage.single("profilepic"),
  auth.verifyUser,
  async (req, res) => {
    const data = req.body;
    const file = req.file;

    try {
      const profile = await Profile.findOne({ user: req.userData._id });

      if (!profile) {
        return res.status(400).send("Profile not found");
      }
      if (!file || file.length === 0) {
        profile.name = data.name ? data.name : profile.name;
        profile.contact = data.contact ? data.contact : profile.contact;
        profile.address = data.address ? data.address : profile.address;
      } else {
        const image = domain + "public/profile/" + file.filename;

        profile.name = data.name ? data.name : profile.name;
        profile.contact = data.contact ? data.contact : profile.contact;
        profile.address = data.address ? data.address : profile.address;
        profile.profilepic = image ? image : profile.profilepic;
      }
      const updatedProfile = await profile.save();
      return res.json({
        msg: "profile updated",
        success: true,
        updatedProfile,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server Error");
    }
  }
);

// code for get the profile by taking the ref of the user
// @route GET profile/get
// @desc Get a profile
// @access Private
router.get("/profile/get", auth.verifyUser, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userData._id });
    if (!profile) {
      return res.status(400).send("Profile not found");
    }
    res.json({ msg: "profile fetched", success: true, profile });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// code for delete the profile by taking the ref of the user
// @route DELETE profile/delete
// @desc Delete a profile
// @access Private
router.delete("/profile/delete", auth.verifyUser, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userData._id });
    if (!profile) {
      return res.status(400).send("Profile not found");
    }
    await profile.deleteOne();
    res.json({ msg: "profile deleted", success: true, profile });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
