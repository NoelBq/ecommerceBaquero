
import './endpurchasemodal.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './endpurchasemodal.css'
import LineLoader from '../loader/LineLoader';

function EndPurchase({ orderId }) {
  return (

    <>
      <div className="modal-body">
        <div className="success-modal">
          <div className="success-icon">
            <DoneAllIcon className='done-icon' />
          </div>
          <div className='purchase-modal-content'>
            <h3><strong>Gracias por tu Compra!</strong></h3>
            {
              orderId ? (
                <p className="message">Su codigo de orden es: {orderId}</p>
              ) : (
                <LineLoader />
              )
            }
            <p className="message">Te contactaremos a la brevedad con los detalles de tu pedido</p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="success-modal-footer" >
          <button className='back-home-btn' onClick={e => window.location.href = '/'}>Volver</button>
        </div>
      </div>
    </>

  )
}

export default EndPurchase;