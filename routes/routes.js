const productController=require('../controller/controller');
const logController=require('../controller/log');
const reviewController=require('../controller/review')
const cartController=require('../controller/myCart')
const express=require('express');
const router=express.Router();

router
.get('/',productController.getallproducts)
.get('/search/:search',productController.getByTag)
.get('/name/:search',productController.getByName)
//log data
.post('/activeUser',logController.activeUser) //info about active user
// .get('/User',logController.user) //check current loggedin user
.post('/login',logController.login)  //to login a user
.get('/logs',logController.getLog)  //to get all registered user
.post('/logout/:email',logController.logout) //to logout a user
.post('/newUser',logController.signup) //to register a user
//reviews related
.post('/review/:search',reviewController.addReview)
.get('/review',reviewController.getReview)
// cart related
.post('/usercart/:email',cartController.addtoCart) //cart of a user
.post('/mycart/delete',cartController.deleteProduct)

exports.router=router;