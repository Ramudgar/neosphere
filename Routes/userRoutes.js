const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// api to save user data
router.post("/users/savedata", (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    res.status(400).json({ msg: "Data not found" });
    return;
  }
  const user = new User({
    name: data.name,
    email: data.email,
    password: data.password,
    age: data.age,
    role: data.role,
    contactNumber: data.contactNumber,
  });

  user
    .save()
    .then((data) => {
      res.json({ msg: "Data inserted", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

// api to get all user data
router.get("/users/getdata", (req, res) => {
  User.find()
    .then((data) => {
      res.json({ msg: "Data fetched", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

// api to get all users using async and await
router.get("/user/getdata", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ msg: "data fetched successfully", success: true, users });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

// api to get user data by id
router.get("/users/getdata/:id", (req, res) => {
  User.findById(req.params.id)

    .then((data) => {
      res.json({ msg: "Data fetched", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

// async await api to get user data by id
router.get("/users/getdata/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ msg: "data fetched successfully", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

// api to update user data by user id also use async await
router.put("/users/update/:id", async (req, res) => {
  const data = req.body;
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!data) {
    res.status(400).json({ msg: "Data not found" });
    return;
  }
  if (!user) {
    res.status(400).json({ msg: "User not found" });
    return;
  }

  try {
    user.name = data.name ? data.name : user.name;
    user.email = data.email ? data.email : user.email;
    user.password = data.password ? data.password : user.password;
    user.role = data.role ? data.role : user.role;
    user.contactNumber = data.contactNumber
      ? data.contactNumber
      : user.contactNumber;
    const updatedUser = await user.save();
    res.json({ msg: "Data updated", success: true, updatedUser });
  } catch (error) {
    res.status(500).json({ msg: error, success: false });
  }
});

// the same api to update user data by user id also use async await but use findOneAndUpdate method
router.put("/users/updatedata/:id", async (req, res) => {
  const data = req.body;
  const user_id = req.params.id;

  if (!data) {
    return res.status(400).json({ msg: "Data not found", success: false });
  }

  try {
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    const updatedFields = {
      name: data.name || user.name,
      email: data.email || user.email,
      password: data.password || user.password,
      role: data.role || user.role,
      contactNumber: data.contactNumber || user.contactNumber,
    };

    const updatedUser = await User.findOneAndUpdate(
      { _id: user_id },
      { $set: updatedFields },
      { new: true }
    );

    res.json({ msg: "Data updated", success: true, updatedUser });
  } catch (error) {
    res.status(500).json({ msg: error.message, success: false });
  }
});

// during update at first find data by user id if data found then update data otherwise show error message and if user want to update one field then update that field only and if user want to update multiple field then update multiple field
// router.put("/users/updatedata/:id", (req, res) => {
//   const data = req.body;
//   if (!data) {
//     res.status(400).json({ msg: "Data not found" });
//     return;
//   }
//   User.findById(req.params.id)
//     .then((user) => {
//       if (data.name) {
//         user.name = data.name;
//       }
//       if (data.email) {
//         user.email = data.email;
//       }
//       if (data.password) {
//         user.password = data.password;
//       }
//       if (data.role) {
//         user.role = data.role;
//       }
//       if (data.contactNumber) {
//         user.contactNumber = data.contactNumber;
//       }
//       user

//         .save()
//         .then((data) => {
//           res.json({ msg: "Data updated", success: true, data });
//         })
//         .catch((error) => {
//           res.status(500).json({ msg: error, success: false });
//         });
//     })
//     .catch((error) => {
//       res.status(500).json({ msg: error, success: false });
//     });
// });

// api to delete user data by user id
router.delete("/users/deletedata/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)

    .then((data) => {
      res.json({ msg: "Data deleted", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

router.delete("/users/deletedatas/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "data deleted successfully", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

module.exports = router;
