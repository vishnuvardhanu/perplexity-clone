import React from 'react'
import bookimg from '../assets/BookLogo.png'
import headingimg from "../assets/Heading.png";
import close from "../assets/arrow.png";
import sbstyl from "../styles/sidebar.module.css";


function NavbarHeader() {
  return (
    <div className={sbstyl.hd}>
        <span className={sbstyl.lg}>
        <img src={bookimg} height={40} alt="Book" />
        <img src={headingimg} width={105} alt="Heading" />
        </span>
        <span className={sbstyl.cls}>
        <img src={close} height={20} alt="" />
        </span>
    </div>
  )
}

export default NavbarHeader