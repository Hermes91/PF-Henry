import { React } from 'react'
import { Link } from 'react-router-dom'
import s from '../Home/prodHome.module.css'


export default function ProdHome() {

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.cardheader}>
                </div>
                <div className={s.cardbody}>
                    <h3>Product's name</h3>
                    <Link to='/ProductDetail{id}' > 
                    {/* agregar la ruta al product detail */}
                        <div className={s.button}>
                            <h4>Read More</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}