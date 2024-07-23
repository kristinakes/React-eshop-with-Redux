import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
import { API_CART_URL } from "../utils/apiConfig";

//Thunk creation for cart actions
export const getCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(API_CART_URL +"1");

            if(!response.ok) {
                throw new Error("Could not fetch cart data.");
            }

            const data = await response.json();
            return data;
        };

        try {
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
            totalAmount: cartData.totalAmount
           }));
        } catch (error) {
            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Error getting cart data",
              })
            );
        
        };
    };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending data",
        message: "Sending cart data to server",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(API_CART_URL + "1", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent to server!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error sending cart",
        })
      );
    }
  };
};


