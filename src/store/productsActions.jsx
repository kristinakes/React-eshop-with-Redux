import { productsActions } from "./productSlice";
import { API_PRODUCTS_URL } from "../utils/apiConfig";

export const getProductsData = () => {
  return async (dispatch) => {
    const products = async () => {
      const response = await fetch(API_PRODUCTS_URL);
      if (!response.ok) {
        throw new Error("Could not get products");
      }

      const data = await response.json();
      return data;
    };

    try {
      const productsData = await products();
      dispatch(
        productsActions.replaceProducts({
          products: productsData,
        })
      );
    } catch (error) {
      console.log("store products error ", error);
    }
  };
};

export const postNewProduct = (product) => {
  return async (dispatch) => {
    const sendProduct = async () => {
      const response = await fetch(API_PRODUCTS_URL, {
        method: "POST",
        body: JSON.stringify({
          id: Math.floor(Math.random() * 1000).toString(), //just for dummy id.
          title: "laptop",
          price: product.price,
          short_description: product.short_description,
          long_description: product.long_description,
          year: product.year,
          RAM: product["RAM"],
          warranty_period: product.warranty_period,
          features: ["Feature 1", "Feature 2", "Feature 3"],
        }),
      });
      if (!response.ok) {
        throw new Error("Could not post product");
      }
    };

    try {
      await sendProduct();
      dispatch(getProductsData());
    } catch (error) {
      console.log(error, " Failed to send products to server");
    }
  };
};

export const updatedProductData = (product, id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(API_PRODUCTS_URL + id, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: product.title,
          price: product.price,
          short_description: product.short_description,
          long_description: product.long_description,
          year: product.year,
          RAM: product["RAM"],
          warranty_period: product.warranty_period,
          features: ["Feature 1", "Feature 2", "Feature 3"],
        }),
      });

      if (!response.ok) {
        throw new Error("Sending products data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(getProductsData());
    } catch (error) {
      console.log("Send products data to server failed");
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const deleteProduct = async () => {
      const response = await fetch(API_PRODUCTS_URL + productId, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Could not delete product");
      }
    };

    try {
      await deleteProduct();
      dispatch(getProductsData());
    } catch (error) {
      console.log(error, " Failed to delete products to server");
    }
  };
};
