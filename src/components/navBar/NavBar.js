
import React from 'react'
import './navBar.css'
import CoffeeIcon from '@mui/icons-material/Coffee';
import CartWidget from './CartWidget';


function NavBar() {
    return (

        <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id=""  defaultValue={''}/ >
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li><a href="#">Productos</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Nosotros</a></li>
          <li>
             < CartWidget />
          </li>
        </ul>
          <h3 className='logo'>Minimal</h3> 
        
      </div>
    </nav>

    )
}

export default NavBar