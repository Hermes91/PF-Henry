import React from "react";
import s from './UserComponent.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserReviews } from "../../redux/actions/actionIndex";
import { useAuth0 } from "@auth0/auth0-react";


export default function UserReviews() {

    const { user } = useAuth0()
    const dispatch = useDispatch()
    const userReviews = useSelector((state) => state.userReviews)


    useEffect(() => {
        !userReviews.length && dispatch(getUserReviews(user.email))
        console.log(userReviews)
        console.log(user.email)
    }, [dispatch, userReviews])

    return (
        <>
            <div className={s.ReviewContainer}>
                <div className={s.ReviewCard}>
                    <h3>  SEE LIST OF USER'S REVIEWS component</h3>
                </div>
            </div>
        </>
    )
}