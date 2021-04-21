import jwt from "jsonwebtoken";
import config from "./config";

const getToken=(user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    }
        ,config.JWT_SECRET,{
        expiresIn:'48hr'
    });
};
const isAuth=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const onlyToken=token.slice(7,token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err,decode)=>{
            if(err){
                return res.status(401).send({message:"Invalid token"});
            }
            req.user=decode;
            next();
            return
        });
    }
    else{
    return res.status(401).send({message:"token is not supplied"});
    }
}

const isAdmin=(req,res,next)=>{
    console.log(req.user);
        if(req.user){
            return next();
        }
        else{
        return res.status(401).send({message:"Admin token is  not valid"});
        }
}

export {getToken, isAuth,isAdmin};