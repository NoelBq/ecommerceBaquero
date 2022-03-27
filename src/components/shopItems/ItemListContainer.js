import React from 'react'
import ShopItem from './ShopItem';
import './shopCards.css'

function ItemListContainer() {
    return (
        <div className="products_section">
            <ul className="cards">
                <ShopItem  greeting="greetings from parent component"/>
                <ShopItem  greeting="greetings from parent component"/>
                <ShopItem  greeting="greetings from parent component"/>
            </ul>
        </div>
    )
}

export default ItemListContainer;