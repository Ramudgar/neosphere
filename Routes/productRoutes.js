const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const auth = require("../config/auth");
const uploadServices = require("../services/uploadServices");
const domain = "http://localhost:5000";
const fs = require("fs");

// @route POST product/create
// @desc Create a product
// @access Private
router.post(
  "/product/create",
  auth.verifyUser,
  uploadServices.productImage.single("image"),
  async (req, res) => {
    const data = req.body;
    // const category = await Category.find({ name: data.category });
    // store category_id to print from category
    // console.log(category)
    // const category_id = category[0]._id;
    // console.log(category_id);

    const file = req.file;
    const user = req.userData.role;
    if (user === "admin") {
      if (!data) {
        return res
          .status(400)
          .json({ error: "Please enter all the required details" });
      } else if (!file) {
        return res.status(400).json({ error: "Please upload an image" });
      } else {
        try {
          const image = domain + "/public/product/" + file.filename;

          const product = new Product({
            name: data.name,
            category: data.category,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            image: image,
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
    } else {
      return res
        .status(401)
        .json({ error: "You are not authorized to create a product" });
    }
  }
);

// @route GET products
// @desc Get all products
// @access Public

router.get("/products/get", async (req, res) => {
  try {
    const products = await Product.find().populate("category"); // Use populate to get category details
    return res
      .status(200)
      .json({ msg: "Products fetched successfully", products });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
});

// @route GET product/:id
// @desc Get a product by ID
// @access Public
router.get("/product/get/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId).populate("category");
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res
      .status(200)
      .json({ msg: "product fetched successfully", product });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
});

// @route PUT product/update/:id
// @desc Update a product by ID (including image)
// @access Private (admin only)
router.put(
  "/product/update/:id",
  auth.verifyUser,
  uploadServices.productImage.single("image"), // Handle image upload
  async (req, res) => {
    const productId = req.params.id;
    const data = req.body;

    // Check if the user is an admin
    if (req.userData.role !== "admin") {
      return res
        .status(401)
        .json({ error: "You are not authorized to update a product" });
    }

    try {
      const product = await Product.find(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Update the product properties with the provided data
      if (data.name) product.name = data.name;
      if (data.price) product.price = data.price;
      if (data.quantity) product.quantity = data.quantity;
      if (data.description) product.description = data.description;

      // Update the image if a new image was uploaded
      if (req.file) {
        const oldImagePath = product.image;
        const newImage = domain + "/public/product/" + req.file.filename;
        product.image = newImage;

        // Remove the old image file if it exists
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save the updated product to the database
      await product.save();

      return res.status(200).json({
        msg: "Product updated successfully",
        product,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server Error" });
    }
  }
);

// delete product by product id
router.delete("/Product/delete/:id", auth.verifyUser, async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.userData.role;
    if (user !== "admin") {
      return res
        .status(401)
        .json({ error: "You are not authorized to delete a product" });
    }

    const product = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ msg: "Product deleted successfully", success: true, product });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

// Define a route for searching products
// this search work only if the name match exact words

router.get("/product/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || query.trim() === "") {
      return res
        .status(400)
        .json({ msg: "Please enter a valid query", success: false });
    }

    const regex = new RegExp(query, "i");
    const products = await Product.find({ name: regex });

    if (products.length === 0) {
      return res.status(400).json({ msg: "No products found", success: false });
    }

    res.status(200).json({
      msg: "Products searched successfully",
      success: true,
      products,
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ msg: "Internal server error", success: false });
  }
});

module.exports = router;
