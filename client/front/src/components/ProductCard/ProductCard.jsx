import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  let { product } = props;
  let dispatch = useDispatch(); // Borrar este comentario.
  return (
    <Link
      // onClick={() => dispatch(clearData())}
      className="card"
      to={`/details/${product.id}`}
    >
      <div className="card">
        <div>
          <img
            width="125"
            height="100"
            src={product.img}
            alt="⚠️ Imagen del producto no encontrada ⚠️" // borrar este comentario.
          />
        </div>
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
        <h4>
          <b>
            ∙ <u> Descripcion</u>
          </b>
          : {product.description}.
        </h4>
      </div>
    </Link>
  );
};

export default ProductCard;