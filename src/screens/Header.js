import React from "react";
import style from './Header.module.scss'

const Header = () =>{
    return (
        <>
        <div className={style.headerContainer}>
        <div className={style.menuContainer}>
            <img className={style.logo} src="https://sherrobotics.s3.ap-south-1.amazonaws.com/Sherlogo5.webp" />
            <li>Home</li>
            <li>About</li>
            <li>Collaborators</li>
            <li>Research & Development</li>
            <li>Training</li>
            <li>Consulting/Services</li>
            <li>Marketing</li>
            <li>Product Development</li>
        </div>
        </div>
        <span className={style.headerBorder}></span>
        </>
    )
}
export default Header;