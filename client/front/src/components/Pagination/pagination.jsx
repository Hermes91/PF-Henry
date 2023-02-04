import React from "react";
import s from '../Pagination/pagination.module.css'

/*
const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    let pages = []


    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>
            {pages.map((page, idx) => {
                return <div key={idx}>
                    <button
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? 'active' : ''}>
                        {page}
                    </button>
                </div>
            })}
        </div>
    )
}

export default Pagination
*/

export default function Paginado ({productsXPage, paginado, products}) {
    const pageNumber = [];

    for (let i= 1 ; i <= Math.ceil(products / productsXPage) ; i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                {pageNumber &&
                pageNumber.map((number) => {
                    <button
                    key = {number}
                    className = {s.active}
                    onClick={() => paginado(number)}
                    >
                    {number}
                    </button>
                })}
            </div>
        </div>
    )
}