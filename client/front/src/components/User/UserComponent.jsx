import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
//import s from './UserComponent.module.css'
import UserSidebar from "./userSidebar";
import EditAccount from './EditAccount'


export default function UserComponent() {


    return (
        <>
            <NavBar />
            <div>
                <div> <UserSidebar /></div>
                <div>
                    <EditAccount />
                </div>
            </div>

            <Footer />
        </>
    )
}