const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },

  profilepic: {
    type: String,
  },
  dob: {
    type: Date,
  },
});

module.exports=mongoose.model("profile",ProfileSchema);
