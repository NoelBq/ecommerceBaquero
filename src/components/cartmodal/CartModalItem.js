import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartModalItem({cartProduct, deleteProduct, totalSum}) {

    const {title, price, id, quantity} = cartProduct

    const removeProductFromCart = (e) => {
        e.stopPropagation()
        deleteProduct(id);
      }

    return (
        <>
            <tr>
                <td className='cart-modal-title'>{title}</td>
                <td className="qty"><input type="text" className="form-control" id="input1" placeholder={quantity}  disabled/></td>
                <td>${price}</td>
                <td>
                <button onClick={removeProductFromCart} className="remove"><DeleteOutlineIcon/></button>
                </td>
                <td>${totalSum()}</td>
            </tr>
        </>
    )
}

export default CartModalItem