import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
// console.log(data);
const app=express();
dotenv.config();
const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error=>console.log(error.reason));

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