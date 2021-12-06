import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true
  // }, 
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: String,
  category: String
});

const product = mongoose.model('Product', productSchema);
export default product;
