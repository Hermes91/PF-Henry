import { Link, useNavigate } from 'react-router-dom'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


// --import style-- //
import style from './NavBar.module.css'

export default function NavBar() {

  let navigate = useNavigate();

  const handleClickMarket = (e) => {
    navigate('/market');
  };

  const handleClickHome = (e) => {
    navigate('/');
  };

  return (
    <div>
      <div className={style.background}>
        <div className={style.NavBar}>

          <div className={style.left}>
            <Link to='/' className={style.btn_left}>
              <FontAwesomeIcon icon={faHome} className={style.icon} onClick={(e) => handleClickHome(e)} alt='Home icon' />
            </Link>
            <Link to='/shop' className={style.btn_left}>Shop</Link>
            <Link to='/about-us' className={style.btn_left}>About Us</Link>
          </div>

          <div className={style.right}>
            <Link to='/login' className={style.btn_right}>Log In</Link>
            <Link to='/market' className={style.btn_right}>
              <FontAwesomeIcon icon={faCartShopping} className={style.icon} onClick={(e) => handleClickMarket(e)} alt='Shopping cart icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}