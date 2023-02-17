import React from "react";
import s from '../Carousel/carousel.module.css'
import background1 from '../../assets/search.jpg'
import background2 from '../../assets/search2.jpg'
import background3 from '../../assets/search3.jpg'
import { Carousel } from "react-responsive-carousel";

export default function Carouselle() {
    return (
        <div className={s.containerH}>

            {/* autoPlay */}
            <Carousel showThumbs={false} interval={4000} infiniteLoop>
                <div>

                    <header>
                        <img className={s.imgCar} alt="carousel1" src={background1} />
                    </header>
                    <div className={s.bar}>
                        <span className={s.h1}>Leave it in  </span>
                        <span className={s.h2}> our hands </span>
                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel2" src={background2} />
                    </header>
                    <div className={s.bar2}>
                        <span className={s.h1}>Explore our </span>
                        <span className={s.barVariety}> VARIETY </span>
                        <button className={s.hShop}><a href="/shop">Go To Shop</a></button>
                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel3" src={background3} />
                    </header>
                    <div className={s.bar}>
                        <span className={s.h1}>best  </span>
                        <span className={s.h2}> plantitas </span>
                        <span className={s.h1}>ever  </span>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}