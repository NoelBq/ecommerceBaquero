
import React from 'react'
import ItemCount from './ItemCount';

function ShopItem(props) {
   

  return (
    <>
             <li className="cards_item">
                <div className="card">
                    <div className="card_image">
                      <img alt="product-img" src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">Autopilot Blend</h2>
                        <p className='card_title'>{props.greeting}</p>
                        <p className="card_text">Sabor a toffee y chocolate</p>
                        <p className="price">$700</p>
                        <ItemCount stock={0} initial={1}/>
                        <button className="btn card_btn">Agregar</button>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;