import Axios from "axios";
// import json from "body-parser/lib/types/jso/n";
import Cookie from "js-cookie";
import {USER_SIGNIN_FAIL,USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNUP_FAIL,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCCESS} from "./../constans/signinConstant"
const signin=(email,password)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST, payload:{email,password}});
    try{
        const {data}=await Axios.post("/api/users/signin",{email,password});
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
        Cookie.set("userInfo",JSON.stringify(data));
    }
    catch(error){
        dispatch({type:USER_SIGNIN_FAIL,payload:error.message});
    }
}
const register=(name,email,password,)=>async(dispatch)=>{
    dispatch({type:USER_SIGNUP_REQUEST,payload:{name,email,password}});
    try{
        const {data}=await Axios.post("/api/user/signup",{name,email,password});
        dispatch({type:USER_SIGNUP_SUCCESS,payload:data});
        Cookie.set("userInfo",JSON.stringify(data));
    }
    catch(error){
        dispatch({type:USER_SIGNUP_FAIL,payload:error.message});
    }
}
export {signin,register};