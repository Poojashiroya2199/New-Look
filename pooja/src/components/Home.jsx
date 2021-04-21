import React, { useState } from "react";
import { Route,Link,Redirect,Switch } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";
import "./../css/Home.css";
import CartScreen from  "./CartScreen";
import SigninScreen from "./Singin";
import { useSelector } from "react-redux";
import SignupScreen from "./Register";
import ProductsScreen from "./ProductsScreen";
import ShippingScreen from './ShippingScreen';
import PaymentScreen from './PaymentScreen';
import PlaceOrderScreen from './PlaceOrderScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';
import OrdersScreen from './OrdersScreen';
// import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function Home(){
    
    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;
    const [showsidebar,setsidebar]=useState(false);
        const openMenu=()=>{
            setsidebar(true);
    }
    const closemenu=()=>{
        setsidebar(false);
    }

    return (
    <div className="grid-container">
        <header className="header">
          <div className="menubtnname" >
              <button className="menubtn" onClick={openMenu}>
              &#9776;
              </button>
              <Link to="/" className="brand" >New Look</Link>
          </div>
             {/* <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" className="link">amazona</Link>
          </div> */}
          <div >
              <Link to="/cart" className="headerlinks"> Cart</Link>
              { userInfo ? <Link to="/profile" className="link usersigned">{userInfo.name}</Link>:
              <Link to="/signin" className="headerlinks link">Sign In</Link>
              }
               {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                {/* <Link to="/">Admin</Link> */}
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders" className="link" >Orders</Link>
                    <Link to="/products" className="link">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
         {/* <div > */}
        <aside className={!showsidebar?"sidebar":"sidebar open"}>
            <h3>Shopping Categories</h3>
            <button onClick={closemenu} className="sidebarclosebtn">X</button>
            <ul className="sidebarlist">
                <li>
                    <Link to="/" className="link">Skin Care</Link>
                </li>
                <li>
                <Link  to="/" className="link">Beauty Care</Link>
                </li>
            </ul>
        </aside> 
        <main className="main">
            <div className="content">
              <Switch>
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={SignupScreen} />
            <Route path="/product/:id"  exact component={Product}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/category/:id" component={Products} />
             <Route path="/" component={Products}/>
             <Redirect to="/" />
             </Switch>
            </div>
        </main>
        {/* </div> */}
        <div className="footer">
                All rights reserved.
        </div>
    </div>   
    )
}