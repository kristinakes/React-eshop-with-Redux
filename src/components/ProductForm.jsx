import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  postNewProduct,
  updatedProductData,
} from "../store/productsActions";
import FloatingLabelInput from "./FloatingLabelInput";
import { uiActions } from "../store/uiSlice";
import { cartActions } from "../store/cartSlice";
import { useEffect } from "react";

function ProductForm({ open, productId, formAction }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );

  const formCloseHandler = () => {
    dispatch(
      uiActions.showForm({ open: false, formAction: null, productId: null })
    );
  };

  const addProductHandler = (data) => {
    dispatch(postNewProduct(data));
    formCloseHandler();
  };

  const updateProductHandler = (data, id) => {
    dispatch(updatedProductData(data, id));
    //to-do: improve cart slice action to update product info if product is changed.
    dispatch(cartActions.deleteItemFromCart(productId));
    formCloseHandler();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    //To-do: get value from button so that dispatch action could be determined
    if (formAction === "add") {
      addProductHandler(formData);
    } else {
      updateProductHandler(formData, productId);
    }
    reset();
  };

  useEffect(() => {
    let defaultValues = {};

    defaultValues.title = product ? product.title : "laptop";
    defaultValues.price = product ? product.price : 0;
    defaultValues.short_description = product ? product.short_description : "";
    defaultValues.long_description = product ? product.long_description : "";
    defaultValues.year = product ? product.year : "";
    defaultValues.RAM = product ? product["RAM"] : "";
    defaultValues.warranty_period = product ? product.warranty_period : "";
    // features: ["Feature 1", "Feature 2", "feature 3"],
    reset({ ...defaultValues });
  }, [product, reset]);

  return (
    <div
      onClick={formCloseHandler}
      className={`fixed inset-0 z-10 flex justify-center items-center transition-color ${
        open ? "block bg-black/70" : "hidden"
      }`}
    >
      <div
        className={`bg-white transition-all ${
          open ? "sclae-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-[600px] p-10 "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 text-black justify-center items-center"
          >
            {/* Dissabling title input for testing. as the product list takes title name for correct picture render. For adding new product I predefined title, so taht on render picture would be loaded */}
            <FloatingLabelInput
              name="title"
              type="text"
              errors={errors}
              register={register}
              disabled
            >
              Title
            </FloatingLabelInput>
            <FloatingLabelInput
              name="short_description"
              type="text"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              Short description
            </FloatingLabelInput>
            <FloatingLabelInput
              name="long_description"
              type="text"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              Long description
            </FloatingLabelInput>
            <FloatingLabelInput
              name="price"
              type="number"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              Price
            </FloatingLabelInput>
            <FloatingLabelInput
              name="year"
              type="text"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              Year
            </FloatingLabelInput>
            <FloatingLabelInput
              name="RAM"
              type="text"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              RAM memory
            </FloatingLabelInput>
            <FloatingLabelInput
              name="warranty_period"
              type="text"
              errors={errors}
              register={register}
              validationSchema={{ required: "This field is required" }}
              required
            >
              Warranty period
            </FloatingLabelInput>
            <div className="flex flex-col sm:flex-row gap-3 my-5 justify-center">
              <button
                className="btn-transparent"
                type="reset"
                onClick={formCloseHandler}
              >
                cancel
              </button>
              {formAction === "update" ? (
                <button
                  type="submit"
                  className="btn-blue"
                >
                  Update product
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-blue"
                >
                  Add product
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ProductForm;
