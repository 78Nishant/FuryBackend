const mongoose= require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    rating: Number,
    comment: String,
    reviewerName: String,
    reviewerEmail: String,

});
exports.Review = mongoose.model('Review', reviewSchema);
