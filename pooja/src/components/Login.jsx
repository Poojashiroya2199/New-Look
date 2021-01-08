import React, { useState } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import LockOpenIcon from "@material-ui/icons/LockOpen";
export default function Login() {
  const [user, setuser] = useState({ username: "", password: "" });
  const handlechange = (property, event) => {
    let copyuser = { ...user };
    copyuser[property] = event.target.value;
    setuser(copyuser);
  };
  return (
    <div className="login">
      <div className="logincontent">
        <div>
          
          <LockOpenIcon color="inherit" className="signinlogo" size="large" />
        </div>
        <h1 className="signin">Sing In </h1>
        <div>
          <input
            placeholder="Username"
            value={user.username}
            onChange={(event) => handlechange("username", event)}
            className="username"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            value={user.password}
            onChange={(event) => handlechange("password", event)}
            className="password"
          />
        </div>
        <div >
        <Button variant="contained" color="primary">
        Submit
      </Button>
        </div>
        <div>
          <Link to="/signup"  className="link">
            Create an account Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
