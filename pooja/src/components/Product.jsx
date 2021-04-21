import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import "./../css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import {detailsProduct,saveProductReview} from "./../actions/Productaction";
import Rating from "./Rating";
import {PRODUCT_REVIEW_SAVE_RESET} from "./../constants/productConstants";

export default function Product(props){
    // console.log(props.match.params.id);
    // const product=data.products.find(x=>x.id===parseInt(props.match.params.id));
    const [qty, setqty] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;
    // console.log({productDetails});
    const dispatch=useDispatch();
    
    useEffect(() => {
        if (productSaveSuccess) {
          alert('Review submitted successfully.');
          setRating(0);
          setComment('');
          dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
        }
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
      },
      //  eslint-disable-next-line 
       [productSaveSuccess]);

    //  const menuitemlen=product.countInStock;
    //  const menuitem=[];
    //  for(let i=0;i<menuitemlen;i++){
    //    menuitem[i]=i+1;
    //  }
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        dispatch(
          saveProductReview(props.match.params.id, {
            name: userInfo.name,
            rating: rating,
            comment: comment,
          })
        );
      };
   
   
     const handleAddToCart=()=>{
         props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
     }
     return (
        <div>
          <div className="backtoresult">
            <Link to="/" className="link"> Back to result</Link>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error} </div>
          ) : (
            <>
              <div className="details">
                <div className="detailsimage">
                  <img src={product.image} alt="product"></img>
                </div>
                <div className="detailsinfo">
                  <ul>
                    <li>
                      <h4>{product.name}</h4>
                    </li>
                    <li>
                      <a href="#reviews">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + ' reviews'}
                        />
                      </a>
                    </li>
                    <li>
                      Price: <b>${product.price}</b>
                    </li>
                    <li>
                      Description:
                      <div>{product.description}</div>
                    </li>
                  </ul>
                </div>
                <div className="detailsaction">
                  <ul>
                    <li>Price: {product.price}</li>
                    <li>
                      Status:{' '}
                      {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                    </li>
                    <li>
                      Qty:{' '}
                      <select
                        value={qty}
                        onChange={(e) => {
                          setqty(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </li>
                    <li>
                      {product.countInStock > 0 && (
                        <button
                          onClick={handleAddToCart}
                          className="button primary"
                        >
                          Add to Cart
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-margined">
                <h2>Reviews</h2>
                {!product.reviews.length && <div>There is no review</div>}
                <ul className="review" id="reviews">
                  {product.reviews.map((review) => (
                    <li key={review._id}>
                      <div>{review.name}</div>
                      <div>
                        <Rating value={review.rating}></Rating>
                      </div>
                      <div>{review.createdAt.substring(0, 10)}</div>
                      <div>{review.comment}</div>
                    </li>
                  ))}
                  <li>
                    <h3>Write a customer review</h3>
                    {userInfo ? (
                      <form onSubmit={submitHandler}>
                        <ul className="formcontainer">
                          <li>
                            <label htmlFor="rating">Rating</label>
                            <select
                              className="rating"
                              id="rating"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="1">1- Poor</option>
                              <option value="2">2- Fair</option>
                              <option value="3">3- Good</option>
                              <option value="4">4- Very Good</option>
                              <option value="5">5- Excelent</option>
                            </select>
                          </li>
                          <li>
                            <label htmlFor="comment">Comment</label>
                            <textarea
                              name="comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                          </li>
                          <li>
                            <button type="submit" className="button primary">
                              Submit
                            </button>
                          </li>
                        </ul>
                      </form>
                    ) : (
                      <div>
                        Please <Link to="/signin">Sign-in</Link> to write a review.
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      );
    }