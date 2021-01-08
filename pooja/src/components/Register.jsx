import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Home.css";
import {useDispatch,  useSelector } from "react-redux";
import {register } from "./../actions/userAction";

export default function Signup(props){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [rePassword,setrePassword]=useState("");

    const userRegister= useSelector(state=>state.userRegister);
    const {loading,userInfo,error}=userRegister;
    const dispatch=useDispatch();
    
    useEffect(()=>{
        if(userInfo){
            props.history.push("/")
        }
        return (()=>{});
     },
       //  eslint-disable-next-line 
              [userInfo]);
  const submitHandler=(e)=>{
      e.preventDefault();
        dispatch(register(name,email,password));
        console.log(email,password);
  }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="formcontainer">
                <li >
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading ? <div>Loading...</div>:
                    error ? <div>{error}</div>:""}
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"  onChange={(e)=>setName(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="rePassword">Confirm Password</label>
                    <input type="password" name="Confirm Password" id="rePassword" onChange={(e)=>setrePassword(e.target.value)}/>
                </li>
                <li>
                    <button className="button primary full-width" type="submit">Sign-Up</button>
                </li>
                <li>Already have an account </li>
                <li>
                    <Link to="/Register" className="button secondary textcenter link " >Login to your amazona Account</Link>
                </li>
            </ul>
        </form>
    </div>;
}