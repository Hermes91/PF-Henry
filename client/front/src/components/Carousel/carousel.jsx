import React from "react";
import s from '../Carousel/carousel.module.css'
import background1 from '../../assets/search.jpg'
import background2 from '../../assets/search2.jpg'
import background3 from '../../assets/search3.jpg'
import { Carousel } from "react-responsive-carousel";

export default function Carouselle() {
    return (
        <div className={s.container}>
          
            <Carousel showThumbs={false}  >
                <div>
                    <div className={s.bar}>
                        <span className={s.h1}>Leave it in  </span>
                        <span className={s.h2}> our hands </span>
                    </div>
                    <header>
                        <img className={s.imgCar} alt="carousel1" src={background1} />
                    </header>
                </div>
                <div>
                    <div className={s.bar}>
                        <span className={s.h1}>Explore our wide variety </span>
                    </div>
                    <header>
                        <img className={s.imgCar} alt="carousel2" src={background2} />
                    </header>
                </div>
                <div>
                    <div className={s.bar}>
                        <span className={s.h1}>best  </span>
                        <span className={s.h2}> plantitas </span>
                        <span className={s.h1}>ever  </span>
                    </div>
                    <header>
                        <img className={s.imgCar} alt="carousel3" src={background3} />
                    </header>
                </div>
            </Carousel>
        </div>
    )
}