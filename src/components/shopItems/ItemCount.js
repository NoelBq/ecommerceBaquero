import React, {useState} from 'react'


export default function ItemCount(props) {

  const [counter, setCount] = useState(0)

   const onAdd = () => { 
       setCount(counter + 1);
   }

   const onLess = () => {
       if(counter > 0) {
        setCount(counter - 1);
       }
   }
  
   const itemCount = () => { 
       if (props.stock <= counter) {
           alert('no hay suficiente stock')
       } else  {
           onAdd();
       }
    }


    return (
        <div className="qty-input">
            <button onClick={onLess} className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
            <p className="product-qty">{counter}</p>
            <button onClick={itemCount} className="qty-count qty-count--add" data-action="add" type="button">+</button>
        </div>
    )
}
