import React, {useContext, useEffect} from 'react'
import CartModalTop from './CartModalTop'
import { Link } from 'react-router-dom'
import CartModalItem from './CartModalItem'
import CartContext from '../../context/CartContext'


export default function CartModalDisplay() {
    const {cartProducts, deleteProduct, totalSum} = useContext(CartContext)



    useEffect(() => {
      }, [cartProducts]);

  
  return (
    <>
    <li>
                    <div className="modal-body">
                        <table className="table table-image">
                            <CartModalTop/>
                            <tbody>
                            {
                        cartProducts.map((cartProduct) => {
                            return(
                                <CartModalItem
                                totalSum={totalSum}
                                deleteProduct={deleteProduct}
                                cartProduct={cartProduct}
                                key={cartProduct.id}
                                />
                            )
                        })
                    }
                    
                                
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                            <h5>Total: <span className="total-price">${totalSum()}</span></h5>
                        </div>
                    </div>
            </li>
            <li>
            <div className="modal-footer">
                    <button type="button" className="btn-modal-footer" data-dismiss="modal">Close</button>
                    <Link to={'/cart'}>
                    <button type="button" className="btn-modal-footer">Checkout</button>
                    </Link>
                    
            </div>
            </li>
    </>
  )
}
