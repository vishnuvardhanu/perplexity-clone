import React from 'react'
import sbstyl from "../styles/sidebar.module.css";
import NavbarHeader from "./NavbarHeader";
import NavbarSearch from "./NavbarSearch";
import NavbarNavigation from "./NavbarNavigation";
import NavbarSignupButton from "./NavbarSignupButton";

function NavbarTopSection() {
  return (
    <div className={sbstyl.top}>
        <NavbarHeader/>
        <NavbarSearch/>
        <NavbarNavigation/>
       <NavbarSignupButton/>
    </div>
  )
}

export default NavbarTopSection