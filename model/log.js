const mongoose= require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
 email:String,
 password:String
});
exports.Log = mongoose.model('Log',logSchema);