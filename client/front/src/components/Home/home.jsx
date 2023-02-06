import { React } from 'react'
import Navbar from '../NavBar/NavBar'
import Carousel from '../Carousel/carousel'
import ProdHome from './prodHome'
import s from '../Home/home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Footer/Footer'
import Contact from '../ContactForm/ContactForm'
import ShopHome from '../Home/shopHome'
import Discount from '../Discount/discount'
import {Auth0Provider} from "@auth0/auth0-react"

export default function Home() {

    return (
        <div className={s.home}>
            <Auth0Provider 
                domain="dev-qbpt8eaprzg0wfvf.eu.auth0.com" 
                clientId="JlEe3AB9FZaRWMcClP6ykipsPweRhPBg" 
                authorizationParams={{
                redirect_uri: window.location.origin}}>
            <Navbar />
            </Auth0Provider>
            <Carousel />
            <div className={s.cards}>
                <ProdHome />
                <ProdHome />
                <ShopHome />
            </div>
            <div className={s.discount}>
                <Discount/>
            </div>
            <div className={s.contact}>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}