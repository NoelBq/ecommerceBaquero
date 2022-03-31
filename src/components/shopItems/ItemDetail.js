import React from 'react'

export default function ItemDetail({ product }) {
    console.log(product)

  const {id, title, description, price, stock, image} = product
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
            <button className="product__btn">Comprar</button>
        </div>
    </div>
    </div>

    </div>
    
  )
}
