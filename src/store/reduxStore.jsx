import { configureStore } from "@reduxjs/toolkit";

//make slices for cart and for product form
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const reduxStore = configureStore({
    reducer:{products:productSlice.reducer, cart: cartSlice.reducer, ui:uiSlice.reducer}
});


export default reduxStore;