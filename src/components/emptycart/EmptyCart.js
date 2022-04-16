import React from 'react'
import './emptycart.css'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className="empty-cart-container">

                    <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.pinimg.com/originals/14/00/86/140086055190b3005647dd397c01e071.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='emptycartimg'/>
                        <h3 className='empty-cart-heading'><strong>Aun no compraste nada</strong></h3>
                        <h4 className='empty-cart-text'>Compra algo que te guste  :)</h4> 
                        <Link to={'/'}  className="empty-cart-btn" data-abc="true">Ir a la Tienda</Link>
                    </div>
       

    </div>
  )
}

export default EmptyCart