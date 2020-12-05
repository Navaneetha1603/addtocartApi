const mongoose=require("mongoose");
var itemSchema=new mongoose.Schema({
    product_id:{
        type:String
        // required:true
    },
    product_qty:{
        type:Number,
        required:true,
        min:[1,'quantity can not be less than 1']
    }
});
const cartSchema=new mongoose.Schema({
    user_email:{
        type:String,
        required:true,
        match:[
            /[\w]+?@[\w]+\.[a-z]{2,4}/,
            `it is not valid email address`
        ]
    },
    items:[itemSchema]
})

const Cart=mongoose.model('Cart',cartSchema);

module.exports=Cart;