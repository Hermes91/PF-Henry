import React from "react";
import img from './img/map_location.jpg'
import { Link } from "react-router-dom";
import s from './map.module.css'
 
export default function Map(){
    return (
        <div className={s.container}>
             <div className={s.text}>We are in 534 SE 37th Ave, Portland, Oregon, EE.UU</div>
            <Link style={{textDecoration: "none"}}
                to = {'https://www.google.com/maps/place/3700+SE+Washington+St,+Portland,+OR+97214,+EE.+UU./@45.5178241,-122.6284546,16z/data=!4m5!3m4!1s0x5495a0eb68828817:0x3fd4af99246d5b58!8m2!3d45.518586!4d-122.6258284?hl=es'}>
            <div className={s.map_container}>
            <img src={img} alt='map of the location'/>
        </div>
    </Link>
            <div className={s.textInv}>Come to visit us!</div>
        </div>
    )
}