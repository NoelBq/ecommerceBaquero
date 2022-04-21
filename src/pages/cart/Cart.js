
import React, { useContext, useEffect, useState} from 'react'
import CheckoutTop from '../../components/checkout/CheckoutTop'
import CheckoutItem from '../../components/checkout/ CheckoutItem'
import CartContext from '../../context/CartContext'
import './cart.css'
import EmptyCart from '../../components/emptycart/EmptyCart'
import ClientInfo from '../../components/clientinfo/ClientInfo'



export default function Cart() {

    const [success, setSuccess] = useState(false)
    const { cartProducts, deleteProduct, totalSum, emptyCart } = useContext(CartContext)


    const totalSumCart = (e) => {
        return totalSum()
    }
    console.log(success)
    const endPurchase = () => {
        setSuccess(true)
        console.log(success)
    }


    useEffect(() => {
    }, [cartProducts]);

    
    console.log(totalSum)

    return (
        <>
            {
                !cartProducts.length ? (
                    <EmptyCart />
                ) : (
                    <div className="wrap cf">
                        <ClientInfo/>
                      
                            <CheckoutTop />
                            <div className="cart">
                                <ul className="cartWrap">
                                    {
                                        cartProducts.map((cartProduct) => {
                                            return (
                                                <CheckoutItem
                                                    totalSumCart={totalSumCart}
                                                    deleteProduct={deleteProduct}
                                                    cartProduct={cartProduct}
                                                    key={cartProduct.id}
                                                />
                                            )
                                        })
                                    }
                                    <div className="special"><div className="specialContent">Envio gratis en compras superiores a $12.000</div></div>
                                </ul>
                            </div>
                            <div className="subtotal cf">
                                <ul>
                                    <li className="totalRow"><span className="label">Total</span><span className="value">${totalSumCart()} </span></li>
                                    <li onClick={emptyCart} className="totalRow"><button className="btn continue">Vaciar Carrito</button></li>
                                    <li className="totalRow"><button className="btn continue" data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar Compra</button></li>
                                </ul>
                            </div> 
                    </div>
                )
            }

        </>

    )
}
