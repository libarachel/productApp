const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/productDb');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    email:String,
    password:String,
});

module.exports=mongoose.model('users', userSchema);
