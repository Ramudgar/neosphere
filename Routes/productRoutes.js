const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const auth = require("../config/auth");
const uploadServices = require("../services/uploadServices");
const domain = "http://localhost:5000";

// @route POST product/create
// @desc Create a product
// @access Private
router.post(
  "/product/create",
  auth.verifyUser,
  uploadServices.productImage.single("image"),
  async (req, res) => {
    const data = req.body;
    const category= await Category.find({name:data.category})
    // store category_id to print from category 
    const category_id=category[0]._id
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
            category: category_id,
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

module.exports = router;
