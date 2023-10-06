const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },

  profilepic: {
    type: String,
    default: "",
  },
  dob: {
    type: Date,
  },
  flag: {
    type: Boolean,
    default: false,
  },
});

module.exports=mongoose.model("profile",ProfileSchema);
