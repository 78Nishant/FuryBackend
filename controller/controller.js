//All methods are contained in here

const model=require('../model/model')
const Product=model.Product

//Methods
exports.getallproducts=async(req,res)=>{
    const product=await Product.find();
    res.status(200).json(product);
}
exports.getByName=async(req,res)=>{
    const search=req.params.search;
    const product=await Product.find({"title": search});
    res.status(200).json(product);
}
exports.getByTag=async(req,res)=>{
    const search=req.params.search;
    const product=await Product.find({"tags": search});
    res.status(200).json(product);
}
exports.addProduct=(req,res)=>{
    const product=new Product(req.body);
    product.save;
    res.json(product);
}