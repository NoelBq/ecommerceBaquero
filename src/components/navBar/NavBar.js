
import React, { useContext } from 'react'
import './navBar.css'
import DropDown from '../dropdown/DropDown';
import { Link } from 'react-router-dom'
import CartModal from '../cartmodal/CartModal';
import CartContext from '../../context/CartContext'
import ContactModal from '../contactmodal/ContactModal';



function NavBar() {

  const { cartProducts } = useContext(CartContext)

  return (
    <>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <input type="checkbox" name="" id="" defaultValue={''} />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">

            <li><DropDown /></li>
            <li>
              <button type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#contact">Contacto</button>
              {/* <Link to={'/contacto'}>Contacto</Link> */}
            </li>
            <li><Link to={'/nosotros'}>Nosotros</Link></li>
            {cartProducts.length ? (
              <li>
                <CartModal />
              </li>

            ) : (<></>)
            }
          </ul>
          <Link to={'/'}><h3 className='logo'>Minimal</h3></Link>
        </div>
      </nav>
      <ContactModal />
    </>
  )
}

export default NavBar