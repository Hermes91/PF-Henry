import grillWishlist from './grillWishlist.jsx'
import Navbar from "../NavBar/NavBar";
import s from './wishlistComponent.module.css'

export default function wishlistComponent() {


    return (
        <>
            <div className={s.navbar}>
                <Navbar/>
            </div>
            <div className={s.grid}>
            <grillWishlist/>
            </div>
        </>
    )

}