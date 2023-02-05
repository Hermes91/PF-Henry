import s from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const ProductCard = (product) => {
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
          <div className={s.info2}>
            <div className={s.cardfoot}>
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
