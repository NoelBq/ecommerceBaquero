
import React, { useEffect } from 'react'
import ItemCount from './ItemCount';

function ShopItem({title, image, description, price, stock, key}) {
  
  return (
    <>
             <li className="cards_item">
                <div className="card">
                    <div className="card_image">
                      <img alt="product-img" src={image}/>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{title}</h2>
                        <p className="card_text">{description}</p>
                        <p className="price">${price}</p>
                        <ItemCount stock={stock} initial={1}/>
                        <button className="btn card_btn">Agregar</button>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;