import { stepConnectorClasses } from '@mui/material'
import React, { useState } from 'react'
import './endpurchasemodal.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {Link} from 'react-router-dom';



function EndPurchase() {

  return (
    <div className="modal" id="orderCompleted" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Completa tus datos</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <div className="sucess-modal">
    <div className="success-icon">
    <DoneAllIcon className='done-icon'/>
    </div>
    <h3><strong>Gracias por tu Compra!</strong></h3>
      <p className="message">Te contactaremos a la brevedad con los detalles de tu pedido</p>
      
     </div>
        </div>
        <div className="modal-footer">
           <Link to={'/'}>Volver</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EndPurchase;