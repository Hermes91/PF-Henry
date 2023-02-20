import s from "./ProductCard.module.css";
import React from "react";

const ProductCard = (product) => {

    return (
        <div className={s.prodCont}>
            <div className={s.header}>
                <img src={product.img} />
                <div className={s.cardBody}>
                    <h3>
                        {product.name}
                    </h3>
                    <h4>
                        ${product.price}.00
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;
