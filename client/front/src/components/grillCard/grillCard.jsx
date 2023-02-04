import { React, useState, useEffect } from 'react'
import Loading from '../loading/loading'
// import ProductCard from '../ProductCard/ProductCard'
import Card from '../grillCard/card'
import s from './grillCard.module.css'
import Pagination from '../Pagination/pagination'

export default function GrillCard() {
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPage] = useState(15)

    const plants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, "2500")
    })

    const lastPostIndex = currentPage * postPage
    const firstPostIndex = lastPostIndex - postPage
    var totalPages = Math.ceil(plants.length / postPage)

    function pagination() {
        return plants.slice(firstPostIndex, lastPostIndex)
    }

    const nextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1)
    }

    const previousPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <div className={s.shopContainer} >

            <div className={s.util}>
                <div className={s.pag}>
                    <button onClick={previousPage} className={s.prevNext}>Previous</button>
                    <Pagination
                        totalPost={plants.length}
                        postPerPage={postPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} />
                    <button onClick={nextPage} className={s.prevNext}>Next</button>
                </div>
            </div>

            {loading ? <div>
                <Loading />
            </div> :
                <div className={s.cardsGrid}>
                    {plants && pagination().map( //cambiar a productsfilt
                        (
                            e
                        ) => (
                            <Link 
                            s={{textDecoration: 'none', color: 'black'}}
                            to={`/products/${e.id}`}
                            key={e.id}
                            >
                            <ProductCar
                            key={e.id}
                            img={e.img}
                            name={e.name}
                            price={e.price}
                            />
                            </Link>
                    )
                    )}

                    {/* <ProductCard /> */}
                </div>}
        </div>
    )

}