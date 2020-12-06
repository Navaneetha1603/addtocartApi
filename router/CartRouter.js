const express=require("express");
const router=express.Router();
const controller=require("../controller/CartController");
// router.get('/hello',(req,res)=>{
//     res.send({message:"hello world"})
// })
router.get('/cartItems',controller.getCartItems);
router.post('/createProducts',controller.createProducts);
router.post('/add/:productId',controller.createCartItems);
router.get('/add/:Id',controller.createCartItems);
router.get('/getProducts/:Id',controller.productById);
router.get('/getProducts',controller.getProducts);

module.exports=router;