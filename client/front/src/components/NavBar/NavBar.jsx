import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";


// --import style-- //
import style from "./NavBar.module.css";
import BurgerMenu from "./Burger";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  let navigate = useNavigate();

  const handleClickMarket = (e) => {
    navigate("/market");
  };

  const handleClickHome = (e) => {
    navigate("/");
  };

  return (
    <div>
      <div className={style.background}>
        <div className={style.NavBar}>
          <div className={style.left}>
            <Link to="/" className={style.btn_left}>
              <FontAwesomeIcon
                icon={faHome}
                className={style.icon}
                onClick={(e) => handleClickHome(e)}
                alt="Home icon"
              />
            </Link>
            <Link to="/shop" className={style.btn_left}>
              Shop
            </Link>
            <Link to="/about-us" className={style.btn_left}>
              About Us
            </Link>
          </div>

          <div className={style.right}>

          
            {isAuthenticated ? <>
              <div className={style.userName}> Hello, {user.name}!
                <BurgerMenu /></div>
            </>
              : <LoginButton className={style.btn_right} />}
           
          </div>
          <Link to="/market" className={style.btn_right}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className={style.icon}
                onClick={(e) => handleClickMarket(e)}
                alt="Shopping cart icon"
              />
            </Link>
        </div>
      </div>
    </div>
  );
}
