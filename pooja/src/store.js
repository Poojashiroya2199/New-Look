import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {productDetailsReducer, productListReducer} from "./reducer/productReducers";
import {cartReducer} from "./reducer/Cartreducer";
import {userSigninReducer, userSignupReducer} from "./reducer/userSigninReducer"
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const cartItems=Cookie.getJSON("cartItems")|| [];
const userInfo=Cookie.getJSON("userInfo")||null;

const initialState={cart:{cartItems},userSignin:{userInfo}};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userSignupReducer 
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;