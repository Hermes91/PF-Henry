import { useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { getProduct, postFavorite,/* getClean */} from "../../redux/actions/actionIndex.js";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const { productId } = useParams();
  const product = useSelector((state) => state.productDetail); 
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const getRating = (rating) => {
    setRating(rating);
  };
  const handleQuantity = (quantity) => {
    if (quantity >= 1 && quantity <= product.stock) setQuantity(quantity);
      if(quantity === product.stock){ 
        quantity = product.stock 
        window.alert('Stock limit') 
      }
  };

  // const addToCart = () => {
  //   let existingItemInCart = null;
  //   if (cart.length)
  //     existingItemInCart = cart.find((item) => item.productId === productId);
  //   if (existingItemInCart)
  //     window.alert("This item has already been added to your cart!");
  //   if (productId && !existingItemInCart)
  //     dispatch(addCartProduct({ productId, quantity }));
  // };

  useEffect(() => {
    dispatch(getProduct(productId));
    // return () => {
    //   dispatch(getClean());
    // };
  }, [dispatch, productId]);

  return (
    <>
      <Navbar />
      <Link to={`/shop`}>
        <div className={style.backButton}>
          <h3>Back</h3>
        </div>
      </Link>

      <div className={style.detailBody}>
        <div className={style.containerP}>
          <div className={style.imagecontainer}>
            <img
              className={style.image}
              src={product?.img}
              alt={product?.name}
            />
          </div>
          <div className={style.info}>
            <div className={style.titleandwish}>
              <h2 className={style.title}>{product.name}</h2>
              <FontAwesomeIcon icon={faHeart} className={style.icon} onClick={() => {
                if(isAuthenticated) {
                  dispatch(postFavorite({
                    email: user.email,
                    productId: product.id
                    }
                  ))
                  alert.window('Product added to your wishlist!')
                } else {
                alert("You have to be logged in to add products to your wishlist");
                //dispatch action addToWishList
                }
              }}/>
            </div>

            <div className={style.infoblockcontainer}>
              <div className={style.infoblock}>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u> Code:</u>
                  </span>{" "}
                  {product?.id}
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u> Height:</u>
                  </span>{" "}
                  {product?.height} cm
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u> Weight:</u>
                  </span>{" "}
                  {product?.weight} gr
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u>Quantity Available:</u>
                  </span>{" "}
                  {product?.stock}
                </p>
                <p className={style.price}>
                  <span className={style.span}>
                    • <u>Price:</u> $ {product?.price}
                  </span>
                </p>
                <button
                  onClick={() => handleQuantity(quantity - 1)}
                  className={style.minusBtn}
                >
                  -
                </button>
                <input className={style.input} value={quantity}></input>
                <button
                  onClick={() => handleQuantity(quantity + 1)}
                  className={style.plusBtn}
                >
                  +
                </button>
              </div>
            </div>

           <button
              onClick={() => {
                if (!user) {
                  window.alert("You have to be logged in to add to cart");
                  //dispatch action addToCart
                } else {
                //  addToCart();
                  alert("Product added to cart!");
                }
              }}
              className={style.myBtn}
            >
              Buy
            </button> 
          </div>
        </div>
        <div className={style.containerdescription}>
          <p className={style.p}>
            <span className={style.descriptiontitle}>
              • <u>Categories:</u>
            </span>
          </p>
          <p className={style.p}>{product?.category}</p>
        </div>
        <div className={style.containerdescription}>
          <p className={style.p}>
            <span className={style.descriptiontitle}>
              {" "}
              • <u>Description:</u>
            </span>
          </p>
          <p className={style.p}>{product?.description}</p>
        </div>
        <div className={style.containerreview}>
          <div className={style.titleandwish}>
            <span className={style.descriptiontitle}>
              <u>Review:</u>
            </span>
            <div className={style.stars}>
              {/* <StarRating getRating={getRating} /> */}
            </div>
          </div>

          <textarea
            // onChange={(e) => setReview(e.target.value)}
            onChange={(e) => setReview(e.target.value)}
            value={review}
            className={style.textarea}
            placeholder="Rate this product!"
            type="textarea"
            rows={5}
            cols={5}
            maxLength="100"
          ></textarea>

          <button
            // onClick={() => {
            //   history.goBack();
            // }}
            onClick={() => {
              if (!user) {
                window.alert("You have to log in to rate this product");
              } else {
                alert("You just rated this product!");
                //dispatch action addToWishList
              }
            }}
            className={style.myBtnCalificar}
          >
            Qualify
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
