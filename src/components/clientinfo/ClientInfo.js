import React, { useEffect, useState, useContext } from 'react'

import CartContext from '../../context/CartContext'
import db from '../../firebaseconfig'
import './clientinfo.css'
import EndPurchase from '../ordercreated/EndPurchase'
import {addDoc , collection} from 'firebase/firestore'

function ClientInfo() {

  const { emptyCart, cartProducts } = useContext(CartContext)
  const [okPurchase, setOkPurchase] = useState(false);
  const [formData, setFormData] = useState(
    {
      name: '',
      phone: '',
      email: ''
    }
  )
  const [order, setOrder] = useState(
    {
      client: formData,
      orderItems: cartProducts.map((cartProd) => {
        return {
          id: cartProd.id,
          title: cartProd.title,
          price: cartProd.price
        }
      })
    }
  )

  const handleFormData = (e) => {
    const { value, name } = e.target
    e.preventDefault();
    console.log(e.target.value, e.target.name)

    setFormData({
      ...formData,
      [name]: value
    }
    )
  }

  console.log(formData)

  const haddleSubmit = (e) => { 
    e.preventDefault();
    setOrder({
      ...order, 
      client: formData
    })
    console.log(order)
    createOrder()
    emptyCart()
    setOkPurchase(true)
  }

  const createOrder = async() => {
    let pastOrder = { ...order, 
      client: formData
    }
    const orderDTO = collection(db, 'orders')
     const orderFirebase = await addDoc(orderDTO, pastOrder)
    console.log('orden generada', orderFirebase)
    console.log(orderFirebase.id)
  }



  useEffect(() => {
  }, [okPurchase]);
  console.log(formData)
  console.log(order)

  return (

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Completa tus datos</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
 
          <div className="modal-body">
          <EndPurchase/>
            <form  onSubmit={haddleSubmit} id="contact" action="" method="post">
              <fieldset>
                <input name="name" className="form-input" placeholder="Nombre" type="text" tabIndex="1" required autoFocus onChange={handleFormData} />
              </fieldset>
              <fieldset>
                <input name="email" className="form-input" placeholder="Email" type="email" tabIndex="2" required onChange={handleFormData} />
              </fieldset>
              <fieldset>
                <input name="phone" className="form-input" placeholder="Telefono" type="tel" tabIndex="3" required onChange={handleFormData} />
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit">Enviar</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientInfo