import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    cartItem: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
}, {
    addToCart: (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItem.find((i) => i.id === item.id);

        if (isItemExist) {
            state.cartItem.forEach(i => {
                if (i.id === item.id) i.quantity += 1;
            })
        }
        else {
            state.cartItem.push(item);
        }
    },
    decrement: (state, action) => {
        const item = state.cartItem.find((i) => i.id === action.payload);
        if (item.quantity > 1) {
            state.cartItem.forEach((i) => {
                if (i.id === item.id) i.quantity -= 1;
            })
        }
    },
    deleteFromCart: (state, action) => {
        state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    },
    calculatePrice: (state) => {
        let sum = 0;
        state.cartItem.forEach((i) => (sum += i.price * i.quantity));
        state.subtotal = sum;
        state.shipping = state.subtotal > 50 ? 0 : 20;
        // state.tax = +(state.subTotal * 0.18).toFixed();
        state.total = state.subtotal + state.shipping;
      },
}); 