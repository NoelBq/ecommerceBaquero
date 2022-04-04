import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/shopItems/ItemListContainer'

export default function Home() {
  const { id, categoria } = useParams();
  console.log(categoria)

  return (
    <ItemListContainer />
  )
}