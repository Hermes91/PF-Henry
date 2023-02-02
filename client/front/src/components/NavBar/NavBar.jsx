import { Link, useHistory } from 'react-router-dom'
import React from "react";

import SearchBar from '../SearchBar/SearchBar';

// --import a images y style-- //
import carrito from './img/carrito_logo.png'
import home from './img/home_logo.png'
import style from './NavBar.module.css'

export default function NavBar() {
    
 let history = useHistory ();

  const handleClickMarket = (e) => {
    history.push ('/market');
  };

  const handleClickHome = (e) => {
    history.push ('/home');
  };

    return (
      <div>
      <div className={style.background}>
        <div className={style.components}>
        <div className={style.NavBar}>
           
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
           </div>
           <SearchBar/>
           </div>
    )
}