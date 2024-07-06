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
.post('/log',logController.verification)
.get('/logs',logController.getLog)
.post('/',productController.addProduct)
.post('/review/:search',reviewController.addReview)
.get('/review',reviewController.getReview)
// cart related
.get('/mycart',cartController.getCartProducts)
.post('/mycart',cartController.addProduct)
.delete('/mycart/:item',cartController.deleteProduct)
.delete('/mycart/all',cartController.deleteAll)

exports.router=router;