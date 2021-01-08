import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import  {listProduct} from "./../actions/Productaction";
export default function Products(props){
    // const [products,setproducts]=useState([]);
    const productList =useSelector(state=>state.productList);
    const {products,loading,error}=productList;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProduct());
        return ()=>{ }
    }, 
    //  eslint-disable-next-line 
    [])
    return  loading?<div>Loading..</div>:
    error?{error}:<ul className="products">
        {
            products.map((product)=>
            <li key={product} >
            <div className="product">
            <Link to={"/api/products/"+product.id} className="link">
                <img src={product.image} alt="image1" className="productimage"/>
                </Link>
                <div className="productname">
                    <Link to={"/api/products/"+product.id} className="link">
                        {product.name}
                    </Link> 
                    </div>
                <div className="productbrand">{product.brand}</div>
                <div className="productprice">${product.price}</div>
                <div className="productrating">{product.rating} Stars ({product.numReview} Reviews)</div>
            </div>
        </li>
            )
        }
        </ul>
    
}

 // const fetchdata= async()=>{
        //     const {data}=await axios("/api/products");
        //     setproducts(data)
        // }
        // fetchdata();