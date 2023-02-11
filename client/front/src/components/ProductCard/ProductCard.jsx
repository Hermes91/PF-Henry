import s from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postFavorite, deleteFavorites } from "../../redux/actions/actionIndex"

const ProductCard = (product) => {
  const { user } = useAuth0();
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  
  const handleFavorite = () => {
    if(user.email) {
      const payload = {productId: product.id, email: user.email}
    if (isFav) {
      dispatch(deleteFavorites(payload))
      setIsFav(false)
      alert("Product removed from your wishlist")
    } else {
      dispatch(postFavorite(payload))
      setIsFav(true)
      alert("Product added to your wishlist")
    }
    } else {
      alert('You have to be logged in to add products to your wishlist')
    }
    
  }

  return (
    <div className={s.container}>

      <div className={s.card}>

        <div className={s.cardImg}>
        <Link s={{ textDecoration: "none", color: "black" }}
                to={`/shop`}
              >
          <div className={s.topCard}>
         
            <FontAwesomeIcon icon={faHeart} className={s.icon} onClick={() => {
                if(!user) {
                  window.alert("You have to be logged in to add products to the wishlist")
                } else {
                handleFavorite()
                }
              }}/>
             
          </div>
          </Link>
          <img
            src={product.img}
            alt="⚠️ Imagen del producto no encontrada ⚠️"
          />
        </div>
        <div className={s.cardInfo}>

          <div className={s.info1}>
            <h4 className={s.title}>
              {product.name}
            </h4>
            <h4 className={s.price}>
              ${product.price}
            </h4>
          </div>
          <Link s={{ textDecoration: "none", color: "black" }}
                to={`/shop`}
              >
          <div className={s.info2}>
            <div className={s.cardfoot}>
              <span  onClick={() => {
                if(!user.email) {
                  window.alert("You have to be logged in to add to cart")
                } else {
                  handleFavorite()
                }
              }}>
                Add to cart
              </span>
           
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
