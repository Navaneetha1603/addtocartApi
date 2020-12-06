const Cart=require('../model/Cart');
const product=require('../model/Product');
const getCartItems=async(req,res)=>{
    try{
        const cartItems=await Cart.find({});
        return res.json({data:cartItems});
    }
    catch(err){
        return res.status(200).json(err);
    }
}
const createCartItems=async(req,res)=>{
    let id=req.params.productId;
    console.log(id);
    try{
             const cart=new Cart(req.body);
            //  const cart=new Cart();
            //  cart.user_email=req.body.user_email;
            //  cart.product_id=id;
            //  cart.product_qty=req.body.product_qty;
             try{
                 await cart.save();
                 return res.json({data:cart});
             }
             catch(err){
                 return res.status(200).json(err);
             }
         
    }
    catch(err){
        return res.status(200).json(err);
    }
 }
 const getCartById=async(req,res)=>{
     let id=req.params.userEmail;
     try{
        const cartItemsById=await Cart.find({"user_email":id});
        return res.json({data:cartItemsById});
     }
     catch(err){
         return res.status(200).json(err);
     }
 }
 const updateQuantity=async(req,res)=>{
     let id=req.params.product_id;
     try{
        
     }
     catch(err){
         return res.status(200).json(err);
     }
 }
// const createCartItems=async(req,res)=>{
//    let id=req.params.productId;
//    console.log(id);
//    try{
//         const Product=await product.find({"product_id":id});
//         console.log(Product);
//         if(!Product){
//             return res.status(200).json(`${_id} is not found`);
//         }
//         else{
//             // const cart=new Cart(req.body);
//             const cart=new Cart();
//             cart.user_email=req.body.user_email;
//             cart.product_id=req.query.id;
//             cart.product_qty=req.body.product_qty;
//             try{
//                 await cart.save();
//                 return res.json({data:cart});
//             }
//             catch(err){
//                 return res.status(200).json(err);
//             }
//             // return res.json({data:Product})
//         }
//    }
//    catch(err){
//        return res.status(200).json(err);
//    }
// }
// const productById=async(req,res)=>{
//     let id=req.params.Id;
//     try{
//          const products=await product.find({"product_id":id});
//          return res.json({data:products});
//     }
//     catch(err){
//         return res.status(200).json(err);
//     }
// }
// const createProducts=async(req,res)=>{
//     const Product =new product(req.body);
//     try{
//         await Product.save();
//         return res.json({data:Product});
//     }
//     catch(err){
//         return res.status(200).json(err);
//     }
// }
// const getProducts=async(req,res)=>{
//     try{
//         const products=await product.find({});
//         return res.json({data:products});
//     }
//     catch(err){
//         return res.status(200).json(err);
//     }
// }
module.exports={
    getCartItems,
    createCartItems,
    getCartById,
    updateQuantity
    
}