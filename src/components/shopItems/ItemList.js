
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ShopItem from '../shopItems/ShopItem';
import Spinner from '../loader/Spinner';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../firebaseconfig'

export default function ItemList() {

  const { categoria } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const getProducts = async (category) => {
    try {
      setLoading(true)
      const productsColection = collection(db, 'products');
      const productsSnapShot = await getDocs(productsColection)
      let data = productsSnapShot.docs.map((doc) => {
        let prod = doc.data()
        prod.id = doc.id
        return prod
      })

      if (category) {
        const q = query(collection(db, "products"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        data = querySnapshot.docs.map((doc) => {
          let prod = doc.data()
          prod.id = doc.id
          return prod
        });

      }
      setProducts(data)
      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    setProducts([])
    getProducts(categoria);
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
