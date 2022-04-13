

import React, {useContext, useEffect} from 'react'
import CartWidget from '../navBar/CartWidget'
import './cartModal.css'
import { Link } from 'react-router-dom'
import Media from 'react-media';
import CartModalDisplay from './CartModalDisplay'
import CartContext from '../../context/CartContext';


export default function CartModal() {

    const {cartProducts} = useContext(CartContext)



    useEffect(() => {
      }, [cartProducts]);



    return (
        <div className="dropdown">
            <a className="product btn" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <CartWidget />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Media queries={{ small: { maxWidth: 768 } }}>
          {matches =>
            matches.small ? (
                <li className=''><Link to={'/cart'}>Checkout</Link></li>
            ) : (
                <CartModalDisplay cartProducts={cartProducts}/>
            )
          }
        </Media>
    


            </ul>
        </div>
    )
}
