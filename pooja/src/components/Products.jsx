import React, { useEffect ,useState} from "react";
import {Link} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import  {listProducts} from "./../actions/Productaction";
import Rating from '../components/Rating';

export default function Products(props){
    // const [products,setproducts]=useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    
    const productList =useSelector(state=>state.productList);
    const {products,loading,error}=productList;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProducts(category));
        return ()=>{ }
    }, 
    //  eslint-disable-next-line 
    [category]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
      };
      const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
      };

    return (
        <>
          {category && <h2>{category}</h2>}

<ul className="filter">
  <li>
    <form onSubmit={submitHandler}>
      <input
        name="searchKeyword"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  </li>
  {/* <li>
    Sort By{' '}
    <select name="sortOrder" onChange={sortHandler}>
      <option value="">Newest</option>
      <option value="lowest">Lowest</option>
      <option value="highest">Highest</option>
    </select>
  </li> */}
</ul>
        { loading?<div>Loading..</div>:
    error?{error}:<ul className="products">
        {
            products.map((product)=>
            <li key={product._id} >
            <div className="product">
            <Link to={"/product/"+product._id} className="link">
                <img src={product.image} alt="image1" className="productimage"/>
                </Link>
                <div className="productname">
                    <Link to={"/product/"+product._id} className="link ">
                        {product.name}
                    </Link> 
                    </div>
                <div className="productbrand">{product.brand}</div>
                <div className="productprice">${product.price}</div>
                <div className="productrating">
                <Rating
                    value={product.rating}
                    text={product.numReview + ' reviews'}
                  />
        {/* {product.rating} Stars ({product.numReview} Reviews) */}
                 </div>
            </div>
        </li>
            )}
        </ul>}
    </>)
}

 // const fetchdata= async()=>{
        //     const {data}=await axios("/api/products");
        //     setproducts(data)
        // }
        // fetchdata();