import s from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocalStorage } from "./../productDetails/useLocalStorage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postFavorite, deleteFavorites } from "../../redux/actions/actionIndex"
import { toast } from 'react-toastify'

const ProductCard = (product) => {
  const { user } = useAuth0();
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useLocalStorage("cart")

  const handleFavorite = () => {
    if(user.email) {
      const payload = {productId: product.id, email: user.email}
    if (isFav) {
      dispatch(deleteFavorites(payload))
      setIsFav(false)
      toast.info("Product was removed from your wishlist")
    } else {
      dispatch(postFavorite(payload))
      setIsFav(true)
      toast.info("Product was added to your wishlist")
    }
    } else {
      toast.warn('You must be logged in to add products to your wishlist')
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
                  toast.warn("You must be logged in to add products to the wishlist")
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
                const oldCart = JSON.parse(window.localStorage.getItem("cart"))
                const toCart = [{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: quantity
                }]
                if (oldCart === null) {
                  const toCartStringify = [...toCart]
                  console.log(toCartStringify)
                  setCart(toCartStringify)
                } else {
                  const toCartStringify = [...toCart].concat(oldCart)
                  console.log(toCartStringify)
                  console.log( JSON.parse(window.localStorage.getItem("cart")))
                  setCart(toCartStringify)
                }

                toast.success("Product added to cart!");
              
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
