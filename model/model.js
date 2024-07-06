const mongoose= require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  email:String,
  password:String,
  age:Number
});
exports.Product = mongoose.model('Product', productSchema);