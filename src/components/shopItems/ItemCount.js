import React from 'react'


export default function ItemCount({stock, onAdd, onLess, counter}) {
  
   const itemCount = (evt) => { 
        evt.stopPropagation();
       if (stock <= counter) {
           alert('no hay suficiente stock')
       } else  {
           onAdd();
       }
    }

    return (
        <div className="qty-input">
            <button onClick={onLess} className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
            <p className="product-qty">{counter}</p>
            <button disabled={stock === 0 ? true : null} onClick={itemCount} className="qty-count qty-count--add" data-action="add" type="button">+</button>
        </div>
    )
}
