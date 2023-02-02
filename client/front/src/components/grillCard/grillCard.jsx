import { React, useState, useEffect } from 'react'
import Loading from '../loading/loading'
import Card from './card'
import s from './grillCard.module.css'

export default function GrillCard() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, "2500")
    })


    return (
        <div className={s.shopContainer} >
            {loading ? <div>
                <Loading />
            </div> :
                <div className={s.cardsGrid}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    {/* <ProductCard /> */}
                </div>}
        </div>
    )

}