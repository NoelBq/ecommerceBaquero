import React from 'react'
import { Link } from 'react-router-dom'


export default function DropDown() {
    return (
        <div className="dropdown">
            <a className="product btn dropdown-toggle"  id="dropdownMenuLink" data-bs-toggle="dropdown">
                Productos
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link to={'/categories/remeras'} className="dropdown-item">Remeras</Link></li>
                <li><Link to={'/categories/abrigo'} className="dropdown-item">Abrigos</Link></li>
            </ul>
        </div>
    )
}
