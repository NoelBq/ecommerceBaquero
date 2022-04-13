import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

export default function ItemDetail({product}) {

    const { title, description, price, stock, image} = product
    const [counter, setCount] = useState(1)

    const {  addProductsToCart} = useContext(CartContext);

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

        <div className='product-main'> 
            <div className="product-top">
                <div className="product__gallery">
                    <img src={image} alt="productImg"/>
                </div>
                <div className="product__info">
                    <div className="product__desc">
                        <div className="product__type"></div>
                        <h1>{title}</h1>
                        <p className="product__price">$ {price}</p>
                        <div className="product__short">
                            <p>{description}</p>
                        </div>
                        <div className="product__sizes">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                        </div>
                        {stock ? (<ItemCount
                            onAdd={onAdd} 
                            onLess={onLess} 
                            stock={stock} 
                            counter={counter} 
                            initial={1} />
                        ) : <div></div>}
                          <button onClick={addToCart}  className="product__btn">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
