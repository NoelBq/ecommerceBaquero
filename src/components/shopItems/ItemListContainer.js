import React from 'react'
import ItemList from './ItemList';
import './shopCards.css'

function ItemListContainer() {
    return (
        <div>
            <div className="products_section">
                <ItemList />

            </div>
        </div>

    )
}

export default ItemListContainer;