import { Link, useHistory } from 'react-router-dom'
import React, { useState } from "react";
import { useDispatch } from "react-redux";


// --import a images y style-- //
import carrito from './img/carrito_logo'
import home from './img/home_logo'


export default function NavBar() {
    
 const dispatch = useDispatch();
 let history = useHistory ();

  const handleClickMarket = (e) => {
    e.preventDefault();
    dispatch(getDogos(e));
    history.push ('/market');
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    dispatch(getDogos(e));
    history.push ('/home');
  };

    return (
        <div className={style.NavBar}>
            <div className={style.components}>
           <Link to = '/home' className={style.btn_left}>
            <img
            onClick={(e) => handleClickHome(e)}
            className={style.home}
            src={home}
            alt='Home logo'
            />
           </Link>
           <Link to = '/shop' className={style.btn_left}>Shop</Link>
           <Link to = '/about-us' className={style.btn_left}>About Us</Link>
           <Link to = '/login' className={style.btn_right}>Log In</Link>
           <Link to = '/market' className={style.btn_right}>
            <img
            onClick={(e) => handleClickMarket(e)}
            className={style.shopping_cart}
            src={carrito}
            alt='Shopping cart logo'
            />
           </Link>
           </div>
           </div>
    )
}