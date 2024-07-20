const mongoose= require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  "id":Number,
  "title":String,
  "description":String,
  "category":String,
  "price":Number,
  "discountPercentage":Number,
  "rating":Number,
  "stock":Number,
  
  "tags":Array,
  "brand":String,
  "sku":String,
  "weight":Number,
  
  "dimensions":Object,
  "warrantyInformation":String,
  "shippingInformation":String,
  "availabilityStatus":String,
  
  "reviews":Array,
  "returnPolicy":String,
  "minimumOrderQuantity":Number,
  
  "meta":Object,
  
  "images":Array,
  "thumbnail":String,
});
exports.Product = mongoose.model('Product', productSchema);