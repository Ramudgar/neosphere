const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      type: schema.Types.ObjectId,
      ref: "profile",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
