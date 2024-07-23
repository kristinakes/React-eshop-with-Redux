import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: 1,
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemInCart = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + +newItem.price;

      if (!existingItemInCart) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: +newItem.price,
          year: newItem.year,
          RAM: newItem["RAM"],
          warranty: newItem.warranty_period,
          totalPrice: +newItem.price,
          quantity: 1,
        });
      } else {
        existingItemInCart.quantity++;
        existingItemInCart.totalPrice =
          existingItemInCart.totalPrice + +newItem.price;
      }
    },
    updateItemInCart(state, action) {
      const id = action.payload;
      const existingItemInCart = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItemInCart.price;

      if (existingItemInCart.quantity === 1) {
        //if only one item in cart ir will return items array without that item(will remove it wrom cart)
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItemInCart.quantity--;
        existingItemInCart.totalPrice =
          existingItemInCart.totalPrice - existingItemInCart.price;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItemInCart = state.items.find((item) => item.id === id);
      if (existingItemInCart) {
        state.totalQuantity = state.totalQuantity - existingItemInCart.quantity;
        state.totalAmount = state.totalAmount - existingItemInCart.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

//to access the methods in cart slice from other components
export const cartActions = cartSlice.actions;

//to access the data in other components
export default cartSlice;
