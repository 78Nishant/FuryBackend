const model=require('../model/log');
const Log=model.Log;

exports.addLog= (req,res)=>{
    const log=new Log(req.body);
    console.log(req.body);
    log.save();
    res.json(log); 
}
exports.getLog=async (req,res)=>{
    const log=await Log.find();
    res.json(log);
}
exports.verification=async (req, res) => {
    try {
    const { email, password } = req.body;
    
    // Check if the email is already registered
    const existingUser = await Log.findOne({ email });
    if (existingUser) {
    return res.status(200).json({  message: 'Welcome Back!' });
    }
    else{
        return res.status(200).json({message: 'No user found !'})
    }
    
    // // Create a new user
    // const newUser = new User({ email, password });
    // await newUser.save();
    
    // res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
    console.error('Error registering user:', error);
    res.status(550).json({ error: 'An error occurred while registering the user' });
    }
   };