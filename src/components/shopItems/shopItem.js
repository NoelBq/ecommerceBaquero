
import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function ShopItem({title, image, description, price, stock, id}) {

  const [counter, setCount] = useState(1)

  const onLess = (evt) => {
      evt.stopPropagation();
      if(counter > 0) {
       setCount(counter - 1);
      }
  }

  const onAdd = () => {
      setCount(counter + 1);
  }

  return (
    <>
      {console.log(id)}
             <li className="cards_item">
                <div className="product_card">
                    <div className="card_image">
                      <img alt="product-img" src={image}/>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{title}</h2>
                        <p className="card_text">{description}</p>
                        <p className="price">${price}</p>
                        <ItemCount
                            onAdd={onAdd} 
                            onLess={onLess} 
                            stock={stock} 
                            counter={counter} 
                            initial={1} />
                        <Link to={`/product/${id}`}><button className="btn card_btn">Ver mas</button></Link>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;