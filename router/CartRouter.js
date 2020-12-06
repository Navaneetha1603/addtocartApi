const express=require("express");
const router=express.Router();
const controller=require("../controller/CartController");
// router.get('/hello',(req,res)=>{
//     res.send({message:"hello world"})
// })
router.get('/cartItems',controller.getCartItems);
// router.post('/createProducts',controller.createProducts);
router.post('/add/:productId',controller.createCartItems);
// router.get('/add/:Id',controller.createCartItems);
// router.get('/getProducts/:Id',controller.productById);
// router.get('/getProducts',controller.getProducts);
router.get('/cartItems/:userEmail',controller.getCartById);
router.patch('/cartItems/:product_id',controller.updateQuantity);
router.delete('/cartProduct/:product_id',controller.deleteProductsbyPid);
router.delete('/remove/:userEmail',controller.deleteProductsbyUserId);

module.exports=router;