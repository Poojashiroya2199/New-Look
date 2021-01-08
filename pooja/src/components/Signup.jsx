import React, { useState } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import LockOpenIcon from "@material-ui/icons/LockOpen";
export default function Signup() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const handlechange = (property, event) => {
    let copyuser = { ...user };
    copyuser[property] = event.target.value;
    setuser(copyuser);
    console.log(user);
  };
  return (
    <>
    <div className="login">
      <div className="logincontent">
      <div>
      <LockOpenIcon color="inherit" className="signinlogo" size="large" />
       </div>
       <h1 className="signin">Sing Up </h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(event) => handlechange("username", event)}
          className="username"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Id"
          value={user.email}
          onChange={(event) => handlechange("email", event)}
          className="username"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(event) => handlechange("password", event)}
          className="password"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={user.confirmpassword}
          onChange={(event) => handlechange("confirmpassword", event)}
          className="password"
        />
      </div>
      <div >
        <Button variant="contained" color="primary">
        Submit
      </Button>
        </div>
      <div>
        <Link to="/login" >
          ALready have an account? Sign In
        </Link> 
      </div>
      </div>
      </div>
    </>
  );
}
