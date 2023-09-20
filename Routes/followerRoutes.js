const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Follower = require("../models/followerModel");

// api to save followe and follwing data
router.post("/users/savefollower", async (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    res.status(400).json({ msg: "Data not found" });
    return;
  }
  const follower = new Follower({
    followerId: data.followerId,
    followingId: data.followingId,
  });

  follower
    .save()
    .then((data) => {
      res.json({ msg: "Data inserted", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

// api to get all follower and following person data
router.get("/users/getfollower", async (req, res) => {
  try {
    const followers = await Follower.find();
    res.json({ msg: "data fetched successfully", success: true, followers });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

// api to get follower and following person data by id
router.get("/users/getfollower/:id", (req, res) => {
  Follower.findById(req.params.id)

    .then((data) => {
      res.json({ msg: "Data fetched", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

//  api to unfollow the user
router.delete("/users/unfollow/:id", async (req, res) => {
  try {
    const follower = await Follower.findById(req.params.id);
    if (!follower) {
      return res.status(400).send("Follower not found");
    }
    await follower.deleteOne();
    return res.json({ msg: "Follower removed", success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// api to remove the follower
router.delete("/users/removefollower/:id", async (req, res) => {
  try {
    const follower = await Follower.findById(req.params.id);
    if (!follower) {
      return res.status(400).send("Follower not found");
    }
    await follower.deleteOne();
    return res.json({ msg: "Follower removed", success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// api to get data of followers by suing populate from profile model
router.get("/users/getfollowerdata", async (req, res) => {
  try {
    const followers = await Follower.find().populate("followerId");
    res.json({ msg: "data fetched successfully", success: true, followers });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

// api to get data of specific follower by using populate from the profile model
router.get("/users/:userId/followers", async (req, res) => {
  try {
    const userId = req.params.userId;

    const userFollowers = await Follower.find({ followingId: userId })
      .populate("followerId")
      .exec(); // exec() is used to execute the query and return a promise //or we can use .lean() if we plan to not edit the data

    res.json({
      msg: "Followers data fetched successfully",
      success: true,
      followers: userFollowers,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

module.exports = router;
