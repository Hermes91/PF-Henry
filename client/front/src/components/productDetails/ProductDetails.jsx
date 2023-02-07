import { useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { getProduct,/* getClean */} from "../../redux/actions/actionIndex.js";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from '../Footer/Footer'

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector((state) => state.productDetail); //productTest;

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
                  <span className={style.span}>Code:</span> {product.id}
                </p>
                <p className={style.p}>
                  <span className={style.span}>Height:</span> {product.height} cm
                </p>
                <p className={style.p}>
                  <span className={style.span}>Weight:</span> {product.weight} gr
                </p>
                <p className={style.p}>
                  <span className={style.span}>Quantity Available:</span>{" "}
                  {product.stock}
                </p>
                <p className={style.price}>
                  <span className={style.span}>Price: $ {product.price}</span>
                </p>
                <button className={style.minusBtn}>-</button>
                <input className={style.input} value="1"></input>
                <button className={style.plusBtn}>+</button>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Product added to cart!");
              }}
              className={style.myBtn}
            >
              Buy
            </button>
          </div>
        </div>
        <div className={style.containerdescription}>
          <p className={style.p}>
            <span className={style.descriptiontitle}>Categories:</span>
          </p>
          <p className={style.p}>{product.category}</p>
        </div>
        <div className={style.containerdescription}>
          <p className={style.p}>
            <span className={style.descriptiontitle}>Description:</span>
          </p>
          <p className={style.p}>{product.description}</p>
        </div>
        <div className={style.containerreview}>
          <div className={style.titleandwish}>
            <span className={style.descriptiontitle}>Review:</span>
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
            Qualify
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
