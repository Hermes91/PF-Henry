import { React, useState } from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";

const StarRatings = ({ getRating }) => {
  let [rating, setRating] = useState(1);
  let onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
    getRating(nextValue);
  };

  return (
    <div>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />

      <h2>{`Su reseña es de ${rating} estrellas`}</h2>
    </div>
  );
};
export default StarRatings;
