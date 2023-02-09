import { useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { getProduct, getClean } from "../../redux/actions/actionIndex.js";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import StarRating from "./StarRating";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.productDetail); //productTest;
  useEffect(() => {
    dispatch(getProduct(productId));
    // return () => {
    //   dispatch(getClean());
    // };
  }, [dispatch, productId]);
  const getRating = (rating) => {
    setRating(rating);
  };

  const handleQuantity = (quantity) => {
    if (quantity >= 1) {
      setQuantity(quantity);
    }
    // } && quantity <= product?.stock)  setQuantity(quantity); Al conectar con el stock, imposibilita a comprar mas de la cantidad disponible en el mismo.
  };

  let [error, setError] = useState({
    heightErr: "",
    weightErr: "",
    ageErr: "",
    generalErr: "",
  });

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
                  <span className={style.span}>
                    • <u>Código</u>:
                  </span>{" "}
                  {product.id}
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    {" "}
                    • <u>Altura</u>:
                  </span>{" "}
                  {product.height} cm
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u>Peso</u>:
                  </span>{" "}
                  {product.weight} gr
                </p>
                <p className={style.p}>
                  <span className={style.span}>
                    • <u>Cantidad disponible</u>:
                  </span>{" "}
                  {product.stock}
                </p>
                <p className={style.price}>
                  <span className={style.span}>Precio: $ {product.price}</span>
                </p>
                <button
                  onClick={() => handleQuantity(quantity - 1)}
                  className={style.minusBtn}
                >
                  -
                </button>
                <input className={style.input} value={quantity} type="number" />

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
                alert("Producto añadido al carrito!");
              }}
              className={style.myBtn}
            >
              Comprar
            </button>
          </div>
        </div>
        <div className={style.containerdescription}>
          <p className={style.p}>
            <span className={style.descriptiontitle}>
              • <u>Descripción</u>:
            </span>
          </p>
          <p className={style.p}>{product.description}</p>
        </div>
        <div className={style.containerreview}>
          <div className={style.titleandwish}>
            <span className={style.descriptiontitle}>
              • <u>Reseña</u>:
            </span>
            <div className={style.stars}>
              <StarRating getRating={getRating} />
            </div>
          </div>

          <textarea
            onChange={(e) => setReview(e.target.value)}
            className={style.textarea}
            placeholder="Califica este producto.."
            type="textarea"
            rows={5}
            cols={5}
            maxlength="100"
          ></textarea>

          <button
            onClick={() => {
              alert("Su reseña ha sido enviada!");
            }}
            className={style.myBtnCalificar}
          >
            Calificar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
