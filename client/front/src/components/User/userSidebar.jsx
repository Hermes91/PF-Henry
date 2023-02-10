import { React, useState } from "react";
import s from './userSidebar.module.css'
import LogoutButton from "../Logout/Logout";
import EditAccount from './EditAccount'
import PassChange from './PasswordChange'
import WishList from "./WishList";
import UserReviews from "./UserReviews";



export default function UserSidebar() {


    const [isActive, setIsActive] = useState(false)
    const [isPass, setisPass] = useState(false)
    const [isWish, setIsWish] = useState(false)
    const [isReviews, setIsReviews] = useState(false)



    return (
        <>
            <div className={s.all}>
                <div className={s.sbContainer}>
                    <div className={s.list}>
                        <h4>My Account </h4>
                        <ul>
                            <li className={s.listItem} onClick={() => { setIsActive(true); setisPass(false); setIsWish(false); setIsReviews(false) }}><h3>Edit Account</h3></li>
                            <li className={s.listItem} onClick={() => { setisPass(true); setIsActive(false); setIsWish(false); setIsReviews(false) }}><h3> Change Password</h3></li>
                            <li className={s.listItem} onClick={() => { setIsWish(true); setIsActive(false); setisPass(false); setIsReviews(false) }}><h3>Wish List</h3></li>
                            <li className={s.listItem} onClick={() => { setIsReviews(true); setIsActive(false); setisPass(false); setIsWish(false) }}><h3>My Reviews</h3></li>
                            <li className={s.listItem}> <LogoutButton /></li>
                        </ul>
                    </div>
                </div>
                <div className={s.page}>
                    {isActive && <EditAccount />}
                    {isPass && <PassChange />}
                    {isWish && <WishList />}
                    {isReviews && <UserReviews />}
                </div>
            </div>
        </>
    )
}