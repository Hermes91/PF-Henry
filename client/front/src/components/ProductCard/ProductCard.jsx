import s from "./ProductCard.module.css";
import React from "react";

const ProductCard = (product) => {
  return (
    <div className={s.container}>

      <div className={s.card}>
        <div className={s.cardImg}>
          <img
            src={product.img}
            alt="⚠️ Imagen del producto no encontrada ⚠️"
          />
        </div>
        <div className={s.cardInfo}>
          <h4 className={s.title}>
            {product.name}
          </h4>
          <h4 className={s.price}>
            ${product.price}
          </h4>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
