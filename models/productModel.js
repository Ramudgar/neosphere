const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
