const mongoose= require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    rating: Number,
    comment: String,
    reviewerName: String,
    reviewerEmail: String,
    title:String,
});
exports.Review = mongoose.model('Review', reviewSchema);

// id: Number,
//     brand: String,
//     sku: String,
//     weight: Number,
//     dimensions:Object,
//     warrantyInformation: String,
//     shippingInformation: String,
//     availabilityStatus: String,
//     reviews:Array