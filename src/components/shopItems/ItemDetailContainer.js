
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './itemDetail.css'
import ProductNotFound from '../../pages/notFound/ProductNotFound'

function ItemDetailContainer() {
  let url = "https://run.mocky.io/v3/192610dc-1c1a-431c-8c74-405e915b2e41";

  const { id, categoria } = useParams();
  console.log('===== category');
  console.log(categoria);

  const [product, setProduct] = useState({});

  const getProduct = async () => {
      try {
        const response = await fetch(url);
        const data =  await response.json();
        let prod = data.find(prod => prod.id == id)
        setProduct(prod)         
      } catch (error) {
          console.error(error);
      }
  }


  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
    {
      product ? (
        <ItemDetail product={product} />
      ) : (
        <ProductNotFound/>
      )
    }
    </>
  )
}

export default ItemDetailContainer