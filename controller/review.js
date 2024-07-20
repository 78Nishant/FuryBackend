const model=require('../model/review');
const Review=model.Review;
const model2=require('../model/model')
const Product=model2.Product

exports.addReview=async (req,res)=>{
    const item=req.params.search;
    const feedback=req.body;
    console.log(feedback);
    const review = await Product.findOneAndUpdate(
        {
          title: item
        },
        {
          $push:{
           reviews: feedback
          }
        },
          console.log( item))
  
    res.status(200).json(review);
}
exports.getReview=async (req,res)=>{
    const review=await Review.find();
    res.json(review);
}