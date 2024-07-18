const model=require('../model/review');
const Review=model.Review;
const model_2=require('../model/model')
const Product=model_2.Product

exports.addReview=async (req,res)=>{
    const item=req.params.search;
    const updateVisitor = await Product.findOneAndUpdate(
        {
          title: item
        },
        {
          $push:{
           reviews: req.body
          }
        },
          console.log(req.body, "   working   ", item))
    // const product=await Product.findOne({title : item});
    // var x =JSON.parse(JSON.stringify(product));
   
    // x.reviews.push(req.body);
    // // const review=new Review(req.body);
    // // x.save()
    // // console.log(typeof id) 
    // console.log("So your review is added as ",x.reviews);
    res.json(req.body);
}
exports.getReview=async (req,res)=>{
    const review=await Review.find();
    res.json(review);
}