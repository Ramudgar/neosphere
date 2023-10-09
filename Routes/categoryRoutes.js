const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const User = require("../models/userModel");
const auth = require("../config/auth");

// @route POST category/create
// @desc Create a category
// @access Private
router.post("/category/create", auth.verifyUser, async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ error: "Please enter the category name" });
  }
  const user = await User.findOne({ _id: req.userData._id });
  if (user.role !== "admin") {
    return res
      .status(400)
      .json({ error: "You are not authorized to create category" });
  }

  try {
    const existingCategory = await Category.findOne({ name: data.name });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }
    const category = new Category({
      name: data.name,
    });
    await category.save();
    return res.status(200).json({
      msg: "Category created successfully",
      category,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
});

// @route GET category/all
// @desc Get all categories
// @access Public

router.get("/category/get", async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(400).json({ error: "No categories found" });
    }
    return res.status(200).json({
      msg: "Categories fetched successfully",
      categories,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
}
);

module.exports = router;