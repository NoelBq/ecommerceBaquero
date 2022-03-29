
import React, {useState, useEffect} from 'react'
import ShopItem from './ShopItem';
import Spinner from '../loader/Spinner';

export default function ItemList() {

let url = "https://run.mocky.io/v3/850f5f77-8be1-402d-8db3-dc608c36b91a";

 const [products, setProducts] = useState([]);

  const getProducts = async () => {
      try {
           setTimeout(async () => { 
               const response = await fetch(url);
               const data =  await response.json();
               setProducts(data)               
            }, 2000)
            
      } catch (error) {
          console.error(error);
      }
  }


  useEffect(() => {
    getProducts();
  }, []);



  return (
      
    <>
    
        <ul className="cards">
              {
                  products.length ? (
                      products.map((product) =>
                        <ShopItem
                        title={product.title}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        stock={product.stock}
                        key={product.id}
                      />
                      )
                  ) : (
                    <Spinner />
                  )
              }
       </ul>
    </>
  )
}
