import express, { Router } from "express";
import User from "./../models/userModel";
import {getToken,isAuth} from "./../util";

const router=express.Router();

router.put('/:id', isAuth, async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  });

  
router.post("/signin",async(req,res)=>{
    const signinUser= await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(signinUser){
        res.send({
            id:signinUser.id,
        name:signinUser.name,
        email:signinUser.email,
        isAdmin:signinUser.isAdmin,
        token:getToken(signinUser)
        })
    }else{
        res.status(401).send({message:"Invalid Email or Password"});
    }
});
router.post("/register",async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const newUser=user.save();
    if(newUser){
        res.send({
            _id:newUser._id,
        name:newUser.name,
        email:newUser.email,
        isAdmin:newUser.isAdmin,
        token:getToken(newUser)
        })
    }else{
        res.status(401).send({message:"Invalid User data"});
    }
})
router.get("/createadmin",async(req,res)=>{
    try{
        const user=new User({
        name:"Pooja",
        email:"poojashiroya99@gmail.com",
        password:"pooja123",
        isAdmin:true
    });
    const newUser=await user.save();
    res.send(newUser);
    }
    catch(error){
        res.send({message:error.message})
    }
    console.log("hello");
});

export default router;