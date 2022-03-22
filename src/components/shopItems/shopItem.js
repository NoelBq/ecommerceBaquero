
import React from 'react'
import ItemCount from './ItemCount';

function ShopItem(props) {
   

  return (
    <>
             <li className="cards_item">
                <div className="card">
                    <div className="card_image"><img alt="product-img" src="https://i.pinimg.com/564x/4e/97/48/4e974825f1bd453eec08d76aefdc8d0d.jpg"/></div>
                    <div className="card_content">
                        <h2 className="card_title">Autopilot Blend</h2>
                        <p className='card_title'>{props.greeting}</p>
                        <p className="card_text">Sabor a toffee y chocolate</p>
                        <p className="card_text">$700</p>
                        <ItemCount stock={12} initial={1}/>
                        <button className="btn card_btn">Agregar</button>
                    </div>
                </div>
            </li>
    </>
  )
}

export default ShopItem;