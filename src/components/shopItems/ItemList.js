
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ShopItem from './ShopItem';
import Spinner from '../loader/Spinner';

export default function ItemList() {


  let url = "https://run.mocky.io/v3/192610dc-1c1a-431c-8c74-405e915b2e41";

  const { categoria } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const getProducts = async (category) => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const response = await fetch(url);
        let data = await response.json();
        if (category) {
          data = data.filter(prod => prod.category.toLowerCase() == categoria.toLowerCase());
        }
        setProducts(data)
        setLoading(false)
        console.log(data)
      }, 100)

    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    setProducts([])
    getProducts(categoria);
    console.log(products)
  }, [categoria]);



  return (

    <>

      <ul className="cards">
        {
          !loading ? (
            products.map((product) =>
              <ShopItem
                product={product}
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
