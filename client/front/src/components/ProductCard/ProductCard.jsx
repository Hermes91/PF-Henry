import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const productCard = (props) => {
  let { product } = props;
  let dispatch = useDispatch(); // Borrar este comentario.
  return (
    <Link
      onClick={() => dispatch(clearData())}
      className="card"
      to={`/details/${plant.id}`}
    >
      <div className="card">
        <div>
          <img
            width="125"
            height="100"
            src={plant.img || questionmark}
            alt="⚠️ Imagen del producto no encontrada ⚠️" // borrar este comentario.
          />
        </div>
        <h4>
          <b>
            ∙ <u> Nombre</u>
          </b>
          : {plant.name}.
        </h4>
        <h4>
          <b>
            ∙ <u> Precio</u>
          </b>
          : {plant.price}.
        </h4>
        <h4>
          <b>
            ∙ <u> Descripcion</u>
          </b>
          : {plant.description}.
        </h4>
      </div>
    </Link>
  );
};

export default productCard;
