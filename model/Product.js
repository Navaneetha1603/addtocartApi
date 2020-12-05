const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
    product_id:{
        type:String,
        required:true,
        min:[1,'it should not less than 1']
    }
})
const Product=mongoose.model('Product',ProductSchema);
module.exports=Product;