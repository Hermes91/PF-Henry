import { React } from 'react'
import Navbar from '../NavBar/NavBar'
import Carousel from '../Carousel/carousel'
import ProdHome from './prodHome'
import s from '../Home/home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Footer/Footer'


export default function Home() {

    return (
        <div className={s.home}>
            <Navbar />
            <Carousel />
            <div className={s.cards}>
                <ProdHome />
                <ProdHome />
                <ProdHome />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}