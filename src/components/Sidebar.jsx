import React from "react";
import sbstyl from "../styles/sidebar.module.css";
import NavbarTopSection from "./NavbarTopSection";
import NavbarBottomSection from "./NavbarBottomSection";


function Sidebar() {

  return (
    <div className={sbstyl.bar}>
      <NavbarTopSection/>
      <NavbarBottomSection/>
    </div>
  );
}

export default Sidebar;
