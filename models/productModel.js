const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
