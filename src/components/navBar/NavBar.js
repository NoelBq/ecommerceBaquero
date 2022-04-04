
import React from 'react'
import './navBar.css'
import CartWidget from './CartWidget';
import DropDown from '../dropdown/DropDown';
import { Link } from 'react-router-dom'


function NavBar() {
    return (

        <nav className="custom-navbar">
      <div className="navbar-container">
        <input type="checkbox" name="" id=""  defaultValue={''}/ >
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">

          <li><DropDown/></li>
          <li><Link to={'/contacto'}>Contacto</Link></li>
          <li><Link to={'/nosotros'}>Nosotros</Link></li>

          <li>
             <CartWidget />
          </li>
        </ul>
          <Link to={'/'}><h3 className='logo'>Minimal</h3></Link>
         
        
      </div>
    </nav>

    )
}

export default NavBar