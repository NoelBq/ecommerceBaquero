import React from 'react'

function shopItem() {
  return (
    <>
             <li class="cards_item">
                <div class="card">
                    <div class="card_image"><img alt="product-img" src="https://i.pinimg.com/564x/4e/97/48/4e974825f1bd453eec08d76aefdc8d0d.jpg"/></div>
                    <div class="card_content">
                        <h2 class="card_title">Autopilot Blend</h2>
                        <p class="card_text">Sabor a toffee y chocolate</p>
                        <p class="card_text">$700</p>
                        <div class="qty-input">
                            <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                            <input class="product-qty" type="number" name="product-qty" min="0" max="10" value="1"/>
                            <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
                        </div>
                        <button class="btn card_btn">Agregar</button>
                    </div>
                </div>
            </li>
    </>
  )
}

export default shopItem;