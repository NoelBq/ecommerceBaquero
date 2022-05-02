import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';

function SentComment() {
  return (
    <div>
    <div className="modal-body">
      <div className="success-modal">
        <div className="success-icon">
          <DoneAllIcon className='done-icon' />
        </div>
        <div className='purchase-modal-content'>
          <h3><strong>Gracias!</strong></h3>
          <p className="message">Te contactaremos a la brevedad</p>
        </div>
      </div>
    </div>
    <div className="modal-footer">
      <div className="success-modal-footer" >
        <button className='back-home-btn' onClick={e => window.location.href = '/'}>Volver</button>
      </div>
    </div>
  </div>

)
}
  
export default SentComment