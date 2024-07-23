import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    id: 1,
    products: [],
  },
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload.products;
    },
    // addProduct(state, action){
    //     const newProduct = action.payload;
    //     console.log("gettting data to store for new product ", newProduct)
    //     state.products.push({
    //         id: Math.floor(Math.random() * 1000), //just for testing.
    //       title: "laptop",
    //       price: newProduct.price,
    //       short_description: newProduct.short_description,
    //       long_description: newProduct.long_description,
    //       year: newProduct.year,
    //       RAM: newProduct["RAM"],
    //       warranty_period: newProduct.warranty_period,
    //       features: ["Feature 1", "Feature 2", "feature 3"],
    //     });
    // },
    // updateProduct(state, action) {
    //     const id = action.payload;
    //     //fields to update
    // },
    // deleteProduct(state, action){
    //     const id = action.payload;
    //     state.products = state.products.filter((product) => product.id !== id);
    // }
  },
});

export const productsActions = productSlice.actions;

export default productSlice;
