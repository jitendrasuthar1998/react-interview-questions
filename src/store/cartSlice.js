import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartProducts: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload;
            console.log("product at addProductToCart", product);

            state.cartProducts.push({ ...product, quantity: 1 });

        },

        removeProductFromCart: (state, action) => {
            console.log("product at removeProductFromCart", action.payload);
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload);
        },

        incrementQuantity: (state, action) => {
            console.log("action payload", action.payload);
            const productId = action.payload;
            const product = state.cartProducts.find((item) => item.id === productId);

            if (product) {
                product.quantity += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find((item) => item.id === productId);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }

    }
})

export const {
    addProductToCart,
    removeProductFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;