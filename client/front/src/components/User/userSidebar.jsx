import React from "react";
import s from './userSidebar.module.css'


export default function UserSidebar() {


    return (
        <>
            <div className={s.sbContainer}>
                <div className={s.list}>
                    <h4>My Account </h4>
                    <ul>
                        <li class={s.listItem}>Edit Account</li>
                        <li class={s.listItem}> Change Password</li>
                        <li class={s.listItem}>Wish List</li>
                        <li class={s.listItem}>My reviews</li>
                        <li class={s.listItem}>Logout</li>
                    </ul>
                </div>
            </div>
        </>
    )
}