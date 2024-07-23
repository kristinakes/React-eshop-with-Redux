import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice from "../store/cartSlice";
import uiSlice from "../store/uiSlice";
import productSlice from "../store/productSlice"

export function renderWithProviders(
  ui,
  {
    preloadedState = {},

    store = configureStore({
      reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
