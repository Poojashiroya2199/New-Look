import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Home.css";
import { useDispatch, useSelector } from "react-redux";


export default function Signin(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    
    useEffect(()=>{
        return (()=>{});
     },
       //  eslint-disable-next-line 
              []);
  const submitHandler=(e)=>{
      e.preventDefault();
        dispatch(signin(email,password));
  }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="formcontainer">
                <li >
                    <h2>Sign -In</h2>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </li>
                <li>
                    <button className="button primary full-width" type="submit">Sign in</button>
                </li>
                <li>New to Amazona</li>
                <li>
                    <Link to="/register" className="button secondary textcenter link " >Create your new  amazona Account</Link>
                </li>
            </ul>
        </form>
    </div>;
}