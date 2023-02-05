import React from "react";
import s from '../Pagination/pagination.module.css'


const Pagination = ({ productsXPage, pagination, plants, currentPage }) => {
    let pages = []


    for (let i = 1; i <= Math.ceil(plants / productsXPage); i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>
            {pages && pages.map(number => (
                <button
                key={number}
                    onClick={() => pagination(number)}
                    className={number === currentPage ? 'active' : ''}>
                    {number}
                </button>
            )
            )}
        </div>
    )
}

export default Pagination