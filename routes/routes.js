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
.get('/user',logController.user) //check current loggedin user
.post('/login',logController.login)  //to login a user
.get('/logs',logController.getLog)  //to get all registered user
.post('/logout/:email',logController.logout) //to logout a user
.post('/newUser',logController.signup) //to register a user
.post('/usercart/:email',logController.addtoCart) //cart of a user
.post('/mycart/delete',logController.deleteProduct)
//product related
.post('/',productController.addProduct)
.post('/review/:search',reviewController.addReview)
.get('/review',reviewController.getReview)
// cart related
.get('/mycart',cartController.getCartProducts)
.post('/mycart',cartController.addProduct)

.delete('/mycart/all',cartController.deleteAll)

exports.router=router;