import { React, useState } from "react";
import ReactDom from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import style from "../productDetails/starRating.module.css";

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
        className={style.starComponent}
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
      <h3 className={style.rating}>{`Your review is ${rating} stars.`}</h3>
    </div>
  );
};
export default StarRatings;
