const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const followerSchema = new Schema(
  {
    followerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    followingId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Follower = mongoose.model("Follower", followerSchema);
module.exports = Follower;
