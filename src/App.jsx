import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RouterConfig } from "./router/RouterConfig";
import { sendCartData, getCartData } from "./store/cartActions";
import { getProductsData } from "./store/productsActions";

//this variable used on firts initialization so that cart would not be sent to server
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //Separate effect function to get cart data from db. this executes once
  useEffect(() => {
    dispatch(getCartData());
    dispatch(getProductsData());
  }, [dispatch]);

  //Send request to update cart info in db
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    //Validation if cart is changed
    if (!isInitial) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return <RouterConfig />;
}
export default App;
