const express=require("express");
const bodyParser=require("body-parser");
const router=require("./router/CartRouter");
const app=express();
const mongoose=require("mongoose");
app.use(bodyParser.json());
// var dbUrl="mongodb+srv://mindtree:mindtree@cluster0.wuc4i.mongodb.net/<dbname>?retryWrites=true&w=majority";
// mongoose.connect(dbUrl);
// mongoose.connection.on("connection",()=>{
//     console.log("connected");
// })
var dbURL="mongodb+srv://mindtree:mindtree@cluster0.wuc4i.mongodb.net/<dbname>?retryWrites=true&w=majority";
// var dbURL="mongodb://localhost/databases"
mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected",()=>{
    console.log("connected");
});
app.use('/',router);
app.listen(3400,()=>{
    console.log("express is running on 3400");
})