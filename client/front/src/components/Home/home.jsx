import { React, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Carousel from "../Carousel/carousel";
import ProdHome from "./prodHome";
import s from "../Home/home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Footer/Footer';
import Contact from '../ContactForm/ContactForm';
import ShopHome from '../Home/shopHome';
import Discount from '../Discount/discount';
import { Link, useNavigate } from "react-router-dom";
import Map from '../Map/map'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch} from "react-redux";
import { postUser } from "../../redux/actions/actionIndex";


export default function Home() {

    const dispatch = useDispatch()
    const {isAuthenticated, user} = useAuth0()
    const navigate = useNavigate()

    useEffect( () => {
        isAuthenticated && dispatch(
            postUser({
                email: user.email,
                fullName: user.name || user.nickname,
                picture: user.picture
            }))
    }, [isAuthenticated, dispatch])



    return (
        <>
        {isAuthenticated?
            user.email === ''? //email admin
            navigate('/admin')
              :
              <div className={s.home}>
            <div className={s.nbar}>
                <Navbar />
            </div>
            <Carousel />
            <div className={s.cardsH}>
                <ProdHome id="7" name="Bromelia guzmania" s="0" />
                <ProdHome id="8" name="Bromelia lindenii" s="1" />
                
               { user ? <Link s={{ textDecoration: "none"}}
                to={'/wishlist'}>
                <ShopHome />
                </Link>
                : ''
                }
                
            </div>
            <div className={s.discount}>
                <Discount />
            </div>
            <div className={s.contact}>
                <Map/>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
              :
              <div className={s.home}>
            <div className={s.nbar}>
                <Navbar />
            </div>
            <Carousel />
            <div className={s.cardsH}>
                <ProdHome id="7" name="Bromelia guzmania" s="0" />
                <ProdHome id="8" name="Bromelia lindenii" s="1" />
                
               { user ? <Link s={{ textDecoration: "none"}}
                to={'/wishlist'}>
                <ShopHome />
                </Link>
                : ''
                }
                
            </div>
            <div className={s.discount}>
                <Discount />
            </div>
            <div className={s.contact}>
                <Map/>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
            }
        </>
        
        
    )
}

