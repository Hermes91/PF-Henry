import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import s from './UserComponent.module.css';
import UserSidebar from "./userSidebar";



export default function UserComponent() {


    return (
        <>
            <NavBar />
            <div className={s.UserContainer}>
                <div> <UserSidebar /></div>
            </div>
            <div className={s.foot}>
                <Footer />
            </div>
        </>
    )
}