import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function CheckoutItem({cartProduct, deleteProduct, totalSumCart}) {

    const {title, quantity, price, stock, id} = cartProduct

    const removeProductFromCart = (e) => {
        e.stopPropagation()
        deleteProduct(id);
      }

    return (
        <>
            <li className="items">

                <div className="infoWrap">
                    <div className="cartSection">
                        <p className="itemNumber">Codigo: #{id}</p>
                        <h3>{title}</h3>
                        <p> <input type="text" className="qty" placeholder={quantity} disabled/> x ${price}</p>
                        <p className="stockStatus">Stock: {stock}</p>
                    </div>
                    <div className="prodTotal cartSection">
                        <p>${totalSumCart()}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <button onClick={removeProductFromCart} className="remove"><DeleteOutlineIcon/></button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CheckoutItem