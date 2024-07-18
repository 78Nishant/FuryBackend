const model=require('../model/log');
const Log=model.Log;

exports.getLog=async (req,res)=>{
    const log=await Log.find();
    res.json(log);
}
exports.user=async (req,res)=>{
    const user=await Log.findOne({loggedIn: "true"});
    res.status(200).json(user);
}
exports.login=async (req, res) => {
    try {
    const { email, password } = req.body;
    // Check if the email is already registered
    const User = await Log.findOne({ "email":email });
    const name=(User.name)
    if (User.password==password) {
     await Log.updateOne(
            {"email":email },
            { $set: { loggedIn: "true" } } 
          );
    return res.status(200).json( `Welcome Back! ${name}`);
    }
    else{
        return res.status(200).json({message: 'No user found ! Try Signing up'})
    }
    } 
    catch (error) {
    console.error('Error registering user:', error);
    res.status(550).json({ error: 'An error occurred while registering the user' });
    }
   };
exports.signup=async(req,res)=>{
    const newUser=new Log(req.body);
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' })
}
exports.logout=async(req,res)=>{
    const email=req.params.email
    await Log.updateOne(
        {"email":email },
        { $set: { loggedIn: "false" } } 
      );
      res.status(200).json("Logged out")
}
//Add product to cart
exports.addtoCart=async(req,res)=>{
    const item=req.body;
    const emailSearched=req.params.email;
    // console.log(item);
    console.log(emailSearched)
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
    console.log(item_name);
    console.log(user_email);
    const newcart=await Log.findOneAndUpdate({email: user_email}, { $pull:{CartDetails : {title: item_name} } })
    res.json(newcart);
}