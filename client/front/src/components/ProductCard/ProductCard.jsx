import "./productCard.css";
import { Link } from "react-router-dom";
import "./card.css";
import { useDispatch } from "react-redux";

const Card = (props) => {
  let { dog } = props;
  let dispatch = useDispatch();
  return (
    <Link
      onClick={() => dispatch(clearData())}
      className="card"
      to={`/details/${dog.id}`}
    >
      <div className="card">
        <div>
          <img
            // width="125"
            height="100"
            src={plant.img || questionmark}
            alt="⚠️ Img not found ⚠️"
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
