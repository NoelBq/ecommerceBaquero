
import React, { useState , useContext} from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import InfoIcon from '@mui/icons-material/Info';

function ShopItem({product}) {
  const {title, image, description, price, stock, id} = product
  const [counter, setCount] = useState(1)
  const { addProductsToCart} = useContext(CartContext);


  const onLess = (evt) => {
      evt.stopPropagation();
      if(counter > 0) {
       setCount(counter - 1);
      }
  }

  const onAdd = () => {
      setCount(counter + 1);
  }

  const addToCart = (e) => {
    e.stopPropagation()
    addProductsToCart({...product, quantity: counter})
  }



  return (
    <>
             <li className="cards_item">
                <div className="product_card">
                    <div className="card_image">
                      <img alt="product-img" src={image}/>
                    </div>
                    <div className="card_content">
                        <div className="cart_heading">
                        <h2 className="card_title">{title}</h2>
                        <Link to={`/product/${id}`}><button className="detail-btn"><InfoIcon/></button></Link>
                        </div>
                        <p className="card_text">{description}</p>
                        <p className="price">${price}</p>
                        <ItemCount
                            onAdd={onAdd} 
                            onLess={onLess} 
                            stock={stock} 
                            counter={counter} 
                            initial={1} />
                       
                        <button onClick={addToCart} className="btn card_btn">Comprar</button>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;