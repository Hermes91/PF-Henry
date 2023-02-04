import { styles } from "./ProductCard.module.css";
import React from "react";

const ProductCard = (product) => {
  return (
    <div className="card">
      <img
        width="125"
        height="100"
        src={product.img}
        alt="⚠️ Imagen del producto no encontrada ⚠️"
      />
      <h4>
        <b>
          ∙ <u> Nombre</u>
        </b>
        : {product.name}.
      </h4>
      <h4>
        <b>
          ∙ <u> Precio</u>
        </b>
        : {product.price}.
      </h4>
    </div>
  );
};

export default ProductCard;
