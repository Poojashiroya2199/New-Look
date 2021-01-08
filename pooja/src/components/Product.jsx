import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./../css/Home.css";
// import Form1 from "./Form";
import { useDispatch, useSelector } from "react-redux";
import {detailsProduct} from "./../actions/Productaction";
// import data from "./../data";
export default function Product(props){
    // console.log(props.match.params.id);
    // const product=data.products.find(x=>x.id===parseInt(props.match.params.id));
    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    console.log({productDetails});
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return (()=>{});
     },
       //  eslint-disable-next-line 
              []);

     console.log(product);

    //  const menuitemlen=product.countInStock;
    //  const menuitem=[];
    //  for(let i=0;i<menuitemlen;i++){
    //    menuitem[i]=i+1;
    //  }
     const [qty, setqty] = React.useState("");
   
     const handleChange = (event) => {
       setqty(event.target.value);
     };
   
     const handleAddToCart=()=>{
         props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
     }
    return <div>
            <div className="backtoresult" >
                <Link to={"/"} className="link">Back to results</Link>
            </div>
            {loading?<div>loading...</div>:
             error?<div>{error}</div>:
             (<div className="details">
                    <div className="detailsimage">
                    <img src={product.image} alt="text"/>
                    </div>
                    <div className="detailsinfo">
                        <ul><h4>{product.name}</h4>
                        <li><div>{product.rating} Starts ({product.numReview} Review)</div></li>
                        <li><div><b>{product.price}$</b></div></li>
                        <li><div>Description : {product.description}</div></li>
                        </ul>
                    </div> 
                    <div className="detailsaction">
                        <ul>
                            <li>Price : {product.price}</li>
                            <li>Status : {product.countInStock>0? "Available":"Unavailable"}</li>
                            <li className="detailsqty">
                              {/* <Form1 arr={menuitem} val={qty} handleChange={handleChange}/> */}
                             Qty: <select value={qty} className="select" onChange={handleChange}>
                                 {[...Array(product.countInStock).keys()].map(x=>
                                    <option key={x} value={x+1}>{x+1}</option>
                                    )}
                              </select>
                            </li>
                            <li>
                               {product.countInStock>0 && <button className="button"  onClick={handleAddToCart}>
                                    Add to cart
                                </button>}
                            </li>
                        </ul>
                    </div>
            </div>)
            }
        </div>   
}