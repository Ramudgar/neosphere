const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const auth = require("../config/auth");

// @route POST category/create
// @desc Create a category
// @access Private
router.post("/category/create", auth.verifyUser, async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ error: "Please enter the category name" });
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

module.exports = router;
