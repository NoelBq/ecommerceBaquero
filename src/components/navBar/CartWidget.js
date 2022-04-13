import React, { useContext} from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import CartContext from '../../context/CartContext';


export default function CartWidget() {

  const { cartProducts } = useContext(CartContext);
  return (
    <div className='cart-widget'>
        <ShoppingBagOutlinedIcon />
        <p>{cartProducts.length}</p>
    </div>
  )
}
