import s from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
  const { user } = useAuth0();

  return (
    <div className={s.container}>

      <div className={s.card}>

        <div className={s.cardImg}>
          <div className={s.topCard}>
            <FontAwesomeIcon icon={faHeart} className={s.icon} />
          </div>
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
                if(!user) {
                  window.alert("You must be logged in to buy")
                } else {
                alert("Product added to cart!");
                //dispatch action addToCart
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
