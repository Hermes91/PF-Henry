import { React } from 'react'
import s from '../Home/shopHome.module.css'


export default function ProdHome() {

    return (
        <div className={s.containerShop}>
            <div className={s.card}>
                <div className={s.cardheader}>
                </div>
                <div className={s.cardbody}>
                    <h3>My List ♥</h3>
                </div>
            </div>
        </div>
    )
}