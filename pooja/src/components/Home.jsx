import React, { useState } from "react";
import { Route,Link } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";
import "./../css/Home.css";
import CartScreen from  "./CartScreen";
import Signin from "./Singin";
import { useSelector } from "react-redux";
import Signup from "./Register";
export default function Home(){
    
    const [showsidebar,setsidebar]=useState(false);
        const openMenu=()=>{
            setsidebar(true);
    }
    const closemenu=()=>{
        setsidebar(false);
    }

    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;
    return (
    <div className="grid-container">
        <header className="header">
          <div className="menubtnname" >
              <button className="menubtn" onClick={openMenu}>
                  {/* <MenuIcon color="inherit"  style={{ fontSize: 38 }} /> */}
             &#9776;
              </button>
              <Link to="/" className="brand link" >amazona</Link>
          </div>
          <div >
              <Link to="/cart" className="headerlinks"> Cart</Link>
              { userInfo ? <Link to="/profile">{userInfo.name}</Link>:
              <Link to="/signin" className="headerlinks">Sign In</Link>}
              
          </div>
        </header>
         {/* <div > */}
        <aside className={!showsidebar?"sidebar":"sidebar open"}>
            <h3>Shopping Categories</h3>
            <button onClick={closemenu} className="sidebarclosebtn">X</button>
            <ul className="sidebarlist">
                <li>
                    <Link to="/home" className="link">Skin Care</Link>
                </li>
                <li>
                <Link  to="/home" className="link">Beauty Care</Link>
                </li>
            </ul>
        </aside> 
        <main className="main">
            <div className="content">
                <Route path="/api/products/:id"  exact component={Product}/>
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup}/>
                <Route path="/cart/:id?" component={CartScreen}/>
                <Route path="/" exact component={Products}/>

            </div>
        </main>
        {/* </div> */}
        <div className="footer">
                All rights reserved.
        </div>
    </div>
    
    )
}