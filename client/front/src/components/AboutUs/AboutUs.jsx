import React from "react";
import { Link } from "react-router-dom";
import s from "../AboutUs/AboutUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <div>
      {" "}
      <h1 className={s.title}>
        <u>About Us</u>
        <div className={s.image}></div>
      </h1>
      <h4 className={s.title1}>
        Vivero Henry fue fundado en el año 2023. Nos dedicamos a la produccion
        de plantas ornamentales de calidad con tecnologia de punta, a precio
        justo y con un servicio integral a nuestros clientes, de una manera
        amigable y sustentable con el medioambiente. Ademas prestamos servicios
        a empresas y particulares, visitenos y encuentre todo lo necesario para
        su espacio verde.
      </h4>
      <div className={s.container}>
        <footer>
          <div className={s.logos}>
            <Link to={"https://twitter.com/home"}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>

            <Link to={"https://www.facebook.com/"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link to={"https://www.instagram.com/"}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link to={"https://web.whatsapp.com/"}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>

          <p>Copyright © 2023 Vivero Henry</p>
        </footer>
      </div>
    </div>
  );
}
