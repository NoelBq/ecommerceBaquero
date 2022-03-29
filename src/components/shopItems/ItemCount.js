import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';


export default function ItemCount(props) {

  const [counter, setCount] = useState(props.initial)

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
            <button  disabled={props.stock === 0 ? true : null} onClick={itemCount} className="qty-count qty-count--add" data-action="add" type="button">+</button>
        </div>
    )
}
