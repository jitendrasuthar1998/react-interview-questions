/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        console.log("product at addProductToCart", product);
    
        // Check if the product is already in the cart
        // const findProductIndex = cartProducts.findIndex((item) => item.id === product.id);
    
        // if (findProductIndex !== -1) {
        //     // If the product exists, update its quantity
        //     const updatedCartProducts = cartProducts.map((item, index) =>
        //         index === findProductIndex
        //             ? { ...item, quantity: item.quantity + 1 }
        //             : item
        //     );
        //     setCartProducts(updatedCartProducts);
        // } else {
        //     // If the product doesn't exist, add it with a quantity of 1
        //     const newCartProducts = [...cartProducts, { ...product, quantity: 1 }];
        //     setCartProducts(newCartProducts);
        // }
        const newCartProducts = [...cartProducts, { ...product, quantity: 1 }];
        setCartProducts(newCartProducts);
    };

    const removeProductFromCart = (productId) => {
        const newCartProducts = cartProducts.filter(prod=> prod.id !== productId);
        setCartProducts(newCartProducts);
    }

    const incrementQuantity = (productId) => {
         const findProductIndex = cartProducts.findIndex((item) => item.id === productId);
    
        const updatedCartProducts = cartProducts.map((item, index) =>
            index === findProductIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCartProducts(updatedCartProducts);
    }

    const decrementQuantity = (productId) => {
         const findProductIndex = cartProducts.findIndex((item) => item.id === productId);
    
        const updatedCartProducts = cartProducts.map((item, index) =>
            index === findProductIndex
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartProducts(updatedCartProducts);
    }

    return (
        <CartContext.Provider value={{addProductToCart, cartProducts, removeProductFromCart, incrementQuantity, decrementQuantity}}>
        {children}
    </CartContext.Provider>
    )
}