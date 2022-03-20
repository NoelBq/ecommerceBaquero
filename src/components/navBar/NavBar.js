
import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <div classNameName="nav">
        <div className="header">
            <div className="topheader">
                <div className="logo-container">
                    <img className="logo" src="/img/logo-mercado-liebre.svg" alt="Podcastslogo"/>
                </div>
                <div className="search">
                    <form action="#" method="POST">
                        <input className="search-input" type="text" placeholder="Buscá productos, marcas"/>
                        <i className="search-icon fas fa-search"></i>
                    </form>
                </div>
            </div>
            <div className="bottomheader">
                <span><i className=" money-icon fas fa-hand-holding-usd"></i>Compra en coutas y sin tarjeta de credito</span>
            </div>
        </div>
        <nav className="nav-bar">
            <input type="checkbox" id="chk-nav-bar"/>
            <div className="menu-options">
                <ul className="nav-site">
                    <li><a className="menu-options-links" href="#Ofertas">Ofertas</a></li>
                    <li><a className="menu-options-links" href="#Tiendas">Tiendas Oficiales</a></li>
                    <li><a className="menu-options-links" href="#vender">Vender</a></li>
                    <li><a className="menu-options-links" href="#Ayuda">Ayuda</a></li>
                </ul>
                <ul className="nav-login">
                    <li><a className="menu-options-links" href="/register">Crea tu cuenta<i className="header-icon far fa-address-card"></i></a></li>
                    <li><a className="menu-options-links" href="/login">Ingresa<i className="header-icon fas fa-sign-in-alt"></i></a></li>
                    <li><a className="menu-options-links" href="#miscompras">Mis compras<i className=" header-icon fas fa-shopping-basket"></i></a></li>
                </ul>
            </div>
            <label for="chk-nav-bar" id="burger-close" className="burger-close"><span><i className="nav-icon close-icon fas fa-times"></i></span></label>
            <label for="chk-nav-bar" id="burger-open"><span className="hamburger"><i className="nav-icon burger-icon fas fa-bars"></i></span></label>
    </nav>
    </div>
  )
}

export default NavBar