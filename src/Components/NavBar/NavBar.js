import React from 'react'
import './NavBar.css'

function NavBar({title,logo}) {
  return (
    <nav>
        <div className="imageBox">
            <img src={logo} id="siteLogo" alt={title} />
        </div>
        <h3 id="siteTitle">{title}</h3>
    </nav>
  )
}

export default NavBar