import { React } from "react";
import s from "../Home/shopHome.module.css";
import { Link } from "react-router-dom";

export default function ProdHome() {
  return (
    <div className={s.containerShop}>
      <div className={s.card}>
        <div className={s.cardheader}></div>
        <div className={s.cardbody}>
          <h3>My List ♥</h3>
          <Link to="http://localhost:3000/products/7">
            <li className={s.li}>Bromelia guzmania</li>
          </Link>
          <Link to="http://localhost:3000/products/8">
            <li className={s.li}>Bromelia lindenii</li>
          </Link>
          <Link to="http://localhost:3000/products/1">
            <li className={s.li}>Bonsai cilindro mini -mini pinos</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
