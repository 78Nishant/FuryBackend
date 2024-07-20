const model=require('../model/log');
const Log=model.Log;
//Add product to cart
exports.addtoCart=async(req,res)=>{
    const item=req.body;
    const emailSearched=req.params.email;
    const details=await Log.findOneAndUpdate(
        {
          email: emailSearched
        },
        {   
          $push:{
           CartDetails: item
          }
        },
    )
    res.status(200).json(details)
}
//Delete product from cart
exports.deleteProduct=async(req,res)=>{
    const {item_name,user_email} =req.body;
    const newcart=await Log.findOneAndUpdate({email: user_email}, { $pull:{CartDetails : {title: item_name} } })
    res.json(newcart);
}
//Clear cart 
// exports.deleteProduct=async(req,res)=>{
//     const user_email=req.body;
//     const newcart=await Log.findOneAndUpdate({email: user_email}, { $pull:{CartDetails : {title: item_name} } })
//     res.json(newcart);
// }