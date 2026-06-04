import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: { type: Number, min: 0 },
  category: String,
  stock: { type: Number, min: 0 }
});

export default model("Product", productSchema);