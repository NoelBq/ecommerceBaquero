
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './itemDetail.css'
import ProductNotFound from '../../pages/notFound/ProductNotFound'
import db from '../../firebaseconfig'
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {

      try {
        const docRef = doc(db, "products", id);
        const productSnap = await getDoc(docRef);
        const productDTO = productSnap.data();
        setProduct(productDTO)         
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