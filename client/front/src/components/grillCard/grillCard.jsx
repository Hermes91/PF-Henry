import { React, useState, useEffect } from "react";
import Loading from "../loading/loading";
import ProductCard from "../ProductCard/ProductCard";
import s from "./grillCard.module.css";
import Pagination from "../Pagination/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/actionIndex";

export default function GrillCard() {
  const plants = useSelector((state) => state.filterProducts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsXPage] = useState(15);

  // const plants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]
  const iLastProduct = currentPage * productsXPage;
  const iFirstProduct = iLastProduct - productsXPage;
  const currentProducts = plants.slice(iFirstProduct, iLastProduct);

  useEffect(() => {
    dispatch(getProducts());
    setTimeout(() => {
      setLoading(false);
    }, "2500");
  }, [dispatch]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={s.shopContainer}>
      <div className={s.util}>
        <div className={s.pag}>
          <button onClick={previousPage} className={s.prevNext}>
            Previous
          </button>
          <Pagination
            productsXPage={productsXPage}
            plants={plants.lenght}
            pagination={pagination}
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
        <div className={s.cardsGrid}>
          {currentProducts.map(
              //cambiar a productsfilt
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

          {/* <ProductCard /> */}
        </div>
      )}
    </div>
  );
}
