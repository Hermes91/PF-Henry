import { useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { getProduct, getClean } from "../../redux/actions/actionIndex.js";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId);
  //const history = useHistory();
  /*const productTest = {
    id: "01",
    image: "../../assets/images/brocoli.jpg",
    name: "The best broccoli",
    price: "12.99",
    description:
      "Our broccoli plants have been cultivated with the highest quality standards, using 100% natural fertilizers and pesticides to guarantee a product that you can consume with complete safety. ",
  }; */
  const product = useSelector((state) => state.productDetail); //productTest;

  useEffect(() => {
    dispatch(getProduct(productId));
    // return () => {
    //   dispatch(getClean());
    // };
  }, [dispatch, productId]);

  return (
    <>
      <div className={style.container}>
        <div className={style.imagecontainer}>
          <img className={style.image} src={product.img} alt={product.name} />
        </div>
        <div className={style.info}>
          <div className={style.titleandwish}>
            <h2 className={style.title}>{product.name}</h2>
            <FontAwesomeIcon icon={faHeart} className={style.icon} />
          </div>

          <div className={style.infoblockcontainer}>
            <div className={style.infoblock}>
              <p className={style.p}>
                <span className={style.span}>Código:</span> {product.id}
              </p>
              <p className={style.price}>
                <span className={style.span}>Precio: $ {product.price}</span>
              </p>
              <button className={style.minusBtn}>-</button>
              <input className={style.input} value="1"></input>
              <button className={style.plusBtn}>+</button>
            </div>
          </div>

          <button
            // onClick={() => {
            //   history.goBack();
            // }}
            className={style.myBtn}
          >
            Comprar
          </button>
        </div>
      </div>
      <div className={style.containerdescription}>
        <p className={style.p}>
          <span className={style.descriptiontitle}>Descripción:</span>
        </p>
        <p className={style.p}>{product.description}</p>
      </div>
      <div className={style.containerreview}>
        <div className={style.titleandwish}>
          <span className={style.descriptiontitle}>Reseña:</span>
          <div className={style.stars}>
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
          </div>
        </div>

        <textarea
          className={style.textarea}
          placeholder="Califica este producto"
          type="textarea"
          rows={5}
          cols={5}
        ></textarea>

        <button
          // onClick={() => {
          //   history.goBack();
          // }}
          className={style.myBtnCalificar}
        >
          Calificar
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
