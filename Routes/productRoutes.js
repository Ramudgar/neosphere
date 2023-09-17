const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");
const auth = require("../config/auth");
const uploadServices = require("../services/uploadServices");

// @route POST product/create
// @desc Create a product
// @access Private
router.post(
  "/product/create",

  auth.verifyUser,
  async (req, res) => {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ error: "Please enter the product name" });
    }
    try {
      const product = new Product({
        name: data.name,
        category: data.category,
        price: data.price,
      });
      await product.save();
      return res.status(200).json({
        msg: "Product created successfully",
        product,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server Error" });
    }
  }
);

module.exports = router;
