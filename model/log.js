const mongoose= require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
    name:String,
    phone:Number,
    email:String,
    password:String,
    CartDetails:Array,
    OrderHistory:Array,
    Address:Object,
    RecentlySearched:Array,
    YourProducts:Array,
    Query:Array,
});
exports.Log = mongoose.model('Log',logSchema);