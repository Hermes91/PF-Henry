import React from "react";
import s from './UserComponent.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserReviews, getProducts } from "../../redux/actions/actionIndex";
import { useAuth0 } from "@auth0/auth0-react";


export default function UserReviews() {

    const { user } = useAuth0()
    const dispatch = useDispatch()
    const userReviews = useSelector((state) => state.userReviews)
    const allProducts = useSelector((state) => state.allProducts)


    useEffect(() => {
        !userReviews.length && dispatch(getUserReviews(user.email))
        !allProducts.length && dispatch(getProducts())
        console.log(userReviews)
        console.log(user.email)
    }, [dispatch, userReviews, allProducts])

    const handleProduct = (id, allProducts) =>{
        for(let i = 0; i < allProducts.length; i++){
          if(allProducts[i].id === id) return allProducts[i].name
        }
      }

    return (
        <>
            <div className={s.ReviewContainer}>
                <div className={s.ReviewCard}>
                    <h3>  MY REVIEWS</h3>
                    {userReviews?.map((e) =>(
                        <div className={s.favList} key={e.id}>
                            <ul className={s.favItem} key={e.id}>
                                <li>{e.text}</li>
                                <Link style={{textDecoration: "none"}} key={e.id} to={`/products/${e.productId}`}><li className={s.favPrice}>Product: {handleProduct(e.productId, allProducts)}</li></Link>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}