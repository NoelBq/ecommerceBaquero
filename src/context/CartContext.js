 import React, { createContext, useState, useEffect } from "react";
 
 const CartContext = createContext();
 
 function CartProvider({children}) {
    
    const [cartProducts, setCartProducts] = useState([]);
    
    const addProductsToCart = (product) => {
        
        if (isInCart(product.id)) {
            console.log('is IN Cart');
            const prod = cartProducts.find((p) => p.id === product.id);
            const { quantity } = prod;
            
            prod.quantity = product.quantity + quantity;
            const cartDTO = [ ...cartProducts ];
            setCartProducts(cartDTO);
        } else {
            console.log('Is NOT in Cart');
            setCartProducts(cartProducts => [ ...cartProducts, product]);
        }
    }

    useEffect(() => {
        console.log(cartProducts);
      }, [cartProducts]);
    
    const isInCart = (id) => {
        return cartProducts.some(prod => prod.id === id)
    }
    
    const deleteProduct = (id) => {
        console.log("delete from context");
        return setCartProducts(cartProducts.filter(p => p.id !== id));
    }
    
    const emptyCart = () => {
       return setCartProducts([])
    }
    
    const totalSum = () => {
        let total = cartProducts.reduce((acum, prod) =>  acum + (prod.price * prod.quantity), 0)
        return total
        
    }


    
    const dataDTO = {
        cartProducts,
        addProductsToCart,
        totalSum, 
        emptyCart,
        deleteProduct,
    }
    
    return (
        <CartContext.Provider value={dataDTO} >
        {children}
        </CartContext.Provider>
        )
    }
    
    export { CartProvider }
    export default CartContext