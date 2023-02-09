import React from "react";
import s from './userSidebar.module.css'
import LogoutButton from "../Logout/Logout";

export default function UserSidebar() {


    return (
        <>
            <div className={s.sbContainer}>
                <div className={s.list}>
                    <h4>My Account </h4>
                    <ul>
                        <li className={s.listItem}><h3>Edit Account</h3></li>
                        <li className={s.listItem}><h3> Change Password</h3></li>
                        <li className={s.listItem}><h3>Wish List</h3></li>
                        <li className={s.listItem}><h3>My Reviews</h3></li>
                        <li className={s.listItem}> <LogoutButton /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}