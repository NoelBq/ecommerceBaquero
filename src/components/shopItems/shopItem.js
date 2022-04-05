
import React, { useEffect } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function ShopItem({title, image, description, price, stock, id}) {
  
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
                        <ItemCount stock={stock} initial={1}/>
                        <Link to={`/product/${id}`}><button className="btn card_btn">Ver mas</button></Link>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;