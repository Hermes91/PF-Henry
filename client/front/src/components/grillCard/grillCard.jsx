import { React, useState, useEffect } from 'react'
import Loading from '../loading/loading'
import ProductCard from '../ProductCard/ProductCard'
//import Card from '../grillCard/card'
import s from './grillCard.module.css'
import Pagination from '../Pagination/pagination'
import { useSelector } from "react-redux";

export default function GrillCard() {

    const products = useSelector((state) => state.filterProducts);


    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsXPage] = useState(15)
    

    // const plants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]
    const iLastProduct = currentPage * productsXPage;
    const iFirstProduct = iLastProduct - productsXPage;
    const currentProducts = products.slice(iFirstProduct, iLastProduct);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, "2500")
    })

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
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
                        productsXPage={productsXPage}
                        products={products}
                        pagination={pagination} />
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
                            <ProductCard
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