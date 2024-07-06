require('dotenv').config();
const express=require('express');
const server=express();
const cors=require('cors')
const productRouter=require('./routes/routes');

//connection to database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  
  await mongoose.connect(process.env.CONNECT_URI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//middlewear
server.use(cors());
server.use(express.json())   //--->used to read req.body
server.use('/',productRouter.router);

//running on server
const port=process.env.PORT || 5000;
server.listen(port,()=>{
    console.log(`Connected at port ${port}`)
})