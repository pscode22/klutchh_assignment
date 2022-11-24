import React from 'react';
import '../styles/components_styles/Header.css'
import logo from "../styles/images/Klutchh_logo.png"

export default function Header() {
  return (
    <div className='headerContainer'>
      <div>
        <img src={logo} alt="" style={{height:"20px"}} className="mainLogo"/>
      </div>
    </div>
  )
}
