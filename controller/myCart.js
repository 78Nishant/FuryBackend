const model=require('../model/myCart');
const Cart=model.Cart;

exports.getCartProducts=async (req,res)=>{
    const item=await Cart.find();
    res.json(item)
}
exports.addProduct=async(req,res)=>{
    const item=new Cart(req.body);
    item.save();
    res.json(item);
}
exports.deleteAll=async(req,res)=>{
    const deleteItem=await Cart.drop({});
    res.json("All item Deleted")
}
//currently not working 
exports.deleteProduct=async(req,res)=>{
    const item =req.params.item
    const deletedItem=await Cart.deleteOne({title : item})
    res.json(deletedItem);
}