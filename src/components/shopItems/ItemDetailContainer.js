import { dividerClasses } from '@mui/material'
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import './itemDetail.css'

function ItemDetailContainer() {
  let url = "https://run.mocky.io/v3/850f5f77-8be1-402d-8db3-dc608c36b91a";

  const [product, setProduct] = useState({});

  const getProduct = async () => {
      try {
           setTimeout(async () => { 
               const response = await fetch(url);
               const data =  await response.json();
               let randomProduct  = data[Math.floor(Math.random() * data.length)];

               setProduct(randomProduct)
               console.log(randomProduct)               
            }, 2000)
            
      } catch (error) {
          console.error(error);
      }
  }


  useEffect(() => {
    console.log(product)
    getProduct();
  }, []);

  return (

    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer