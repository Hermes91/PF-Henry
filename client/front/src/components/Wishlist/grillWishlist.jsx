import s from './grillWishlist.module.css'
import {useSelector, useDispatch} from "react-redux";
import Pagination from "../Pagination/pagination";
//import { getWishlistProducts } from "../../redux/actions/actionIndex";
import { getProducts } from "../../redux/actions/actionIndex";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../loading/loading";
import { React, useState, useEffect } from "react";
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";


export default function WishlistProducts() {

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
   // const productsWishlist = useSelector((state) => state.productsWishlist);
   const productsWishlist = useSelector((state) => state.filterProducts);
    const [productsXPage] = useState(9);
    const dispatch = useDispatch();


    const iLastProduct = currentPage * productsXPage;
    const iFirstProduct = iLastProduct - productsXPage;
    const currentProducts = productsWishlist.slice(iFirstProduct, iLastProduct);
   const currentPages = productsWishlist.length / productsXPage;


    useEffect(() => {
      dispatch(getProducts());
        setCurrentPage(1)
        setTimeout(() => {
          setLoading(false);
        }, "1500");
      }, [dispatch, productsWishlist.length]);

      const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const nextPage = () => {
        if (currentPages > currentPage) setCurrentPage(currentPage + 1);
      };
    
      const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    
return (
  <div className={s.wishlistContainer}>
  <div className={s.util}>
    <div className={s.pag}>
      <button onClick={previousPage} className={s.prevNext}>
        Previous
      </button>
      <Pagination
        productsXPage={productsXPage}
        plants={productsWishlist.length}
        pagination={pagination}
        currentPage={currentPage}
      />
      <button onClick={nextPage} className={s.prevNext}>
        Next
      </button>
    </div>
  </div>

    {loading ? (
        <div>
          <Loading />
        </div>
      ) : ( 
        productsWishlist 
        ?
        <div className={s.wishlistGrid}>
          {currentProducts.map(
            (e) => (
              <Link
                s={{ textDecoration: "none", color: "black" }}
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
        </div>
        : 
        <div className={s.notAddedContainer}> 
          <div className={s.notAddedMessage}>  
            Ups... It seems that you have not added products to your wishlist  
          </div>
        </div>
      )}
      
    <Footer/>
    </div>
);
};
