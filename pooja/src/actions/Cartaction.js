import Axios from "axios";
import { ADD_TO_CART,REMOVE_FROM_CART } from "../constans/cartConstant";
import Cookie from "js-cookie";
const addToCart=(productId,qty)=>async(dispatch, getState)=>{
try{
    const {data} = await Axios.get("/api/products/"+productId);
    dispatch({
        type:ADD_TO_CART,payload:{
            product:data.id,
            name:data.name,
            price:data.price,
            image:data.image,
            countInStock:data.countInStock,
            qty
        }
    })
    const {cart:{cartItems}}=getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));
}
catch(error){

}
}

const removeFromCart=(productId)=>async(dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART, payload:productId
    })
    const {cart:{cartItems}}=getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));
}
export {addToCart, removeFromCart};