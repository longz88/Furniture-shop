const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    namePro: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    priceNew: {
      type: String,
      required: true,
    },
    priceOld: {
      type: String,
    },
    sale: {
      type: String,
    },
    SKU: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    dimension: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
