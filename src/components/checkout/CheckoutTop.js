
import React from 'react'
import { Link } from 'react-router-dom'

export default function CheckoutTop() {
    return (
        <div className="checkout-top">
            <h1 className="checkout-title">Finaliza tu compra</h1>
            <div className="heading cf">
                <h1>Tu carrito</h1>
                <Link to={'/'}className="continue">Continuar Comprando</Link>
            </div>
        </div>
    )
}
