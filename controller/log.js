const model=require('../model/log');
const Log=model.Log;
var jwt = require('jsonwebtoken');
var jwtdecode=require('jwt-decode')
require('dotenv').config();

//To get info about all users
exports.getLog=async (req,res)=>{
    const log=await Log.find();
    res.json(log);
}
//to get info about current user(old method)
// exports.user=async (req,res)=>{
//     const user=await Log.findOne({loggedIn: "true"});
//     res.status(200).json(user);
// }


//To get info about active user
exports.activeUser=async(req,res)=>{
    const {authID}=req.body;
    try{
    var decoded_authID=JSON.parse(atob(authID.split('.')[1])); //to decode json back from jwt token
    const user_name=decoded_authID.UserName;
    const userdata=await Log.findOne({name:user_name});
    res.status(200).json(userdata);
    }
    catch(error){
        res.json(null)
    }
}
//Login 
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
    var token =await jwt.sign({UserName: name}, process.env.Secret_key);

    return res.status(200).json( token);
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
//Signup - Register a new user
exports.signup=async(req,res)=>{
    const {name}=req.body;
    const newUser= new Log(req.body);
    await newUser.save();
    var token =await jwt.sign({UserName: name}, process.env.Secret_key);
    res.status(200).json(token);
}
//Logout the current user
exports.logout=async(req,res)=>{
    const email=req.params.email
    await Log.updateOne(
        {"email":email },
        { $set: { loggedIn: "false" } } 
      );
      res.status(200).json("Logged out")
}
