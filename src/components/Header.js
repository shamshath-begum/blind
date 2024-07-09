import React from 'react'
import logo from "../assets/logo.png"
import "./header.css"

function Header() {
  return <>
  <div className='header'>
<div>
    <img src={logo} className='logo'/>
</div>
<div className='title'>
    bliend
</div>
  </div>
      
      
  </>
}

export default Header
