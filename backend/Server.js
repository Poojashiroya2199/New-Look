import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
// import fileUpload from "express-fileupload";
// import productRoute from "./routes/productRoute";
// import orderRoute from "./routes/orderRoute";
// import path from "path";
// console.log(data);
dotenv.config();
const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error=>console.log(error.reason));


const app=express();
app.use("/api/users",userRoute);
app.use(bodyParser.json()); 

app.get("/api/products",(req,res)=>{
    res.send(data);
});
app.get('/api/products/:id',(req,res)=>{
    const id=req.params.id;
    const product=data.find((item)=>item.id===parseInt(id));
    if(!product){
        res.status(404).send(`movie with id ${id} not found`);
        return;
    }
    // console.log(product);
    res.send(product);
});

app.listen(5000,()=>console.log("server started at http://localhost:5000"));