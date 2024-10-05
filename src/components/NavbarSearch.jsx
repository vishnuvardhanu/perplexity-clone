import React from 'react'
import sbstyl from "../styles/sidebar.module.css";


function NavbarSearch() {
  return (
    <div className={sbstyl.search}>
        <div className={sbstyl.srchbox}>
        <span>New Thread</span>
        <div className={sbstyl.opt}>
            <span>Ctrl</span>
            <span>I</span>
        </div>
        </div>
    </div>
  )
}

export default NavbarSearch