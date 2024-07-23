import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import { cartActions } from "../store/cartSlice";
import ProductActionButton from "../components/ProductActionButton";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products.find(product => product.id === id));

  //Getting items in cart info
  const cart = useSelector((state) => state.cart);
  const [productInCart, setProductIncart] = useState(null);

  useEffect(() => {
    const product = cart.items.find((item) => item.id === id);
    setProductIncart(product);
  }, [cart, id, product]);

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.updateItemInCart(id));
  };

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: product.title,
        price: product.price,
        year: product.year,
        RAM: product["RAM"],
        warranty: product.warranty_period,
        totalPrice: product.price,
        quantity: 1,
      })
    );
  };

  //When product added to cart, show message
  const [showAddToCartMessage, setAddToCartMessage] = useState(false);

  return (
    <div className="grid sm:grid-cols-2 max-w-5xl shadow-md text-opacity-25 rounded mx-auto my-20 p-5">
      <div
        className={`${
          showAddToCartMessage ? "block" : "hidden"
        } bg-white flex flex-col gap-4 text-center text-4xl text-blue font-semibold rounded-md shadow-md w-2/5 max-h-fit p-10 m-auto fixed inset-0 z-10 flex justify-center items-center`}
      >
        <p>Product successfully added to cart! </p>
        <button className="btn-blue" onClick={() => setAddToCartMessage(false)}>
          Close Window
        </button>
      </div>
      {product && (
        <>
          <div className="flex flex-wrap md:flex-col gap-4 h-fit p-5">
            <div>
              <h2 className="text-blue text-2xl font-bold my-5">
                {product.title}
              </h2>
              <p className="leading-loose">{product.long_description}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-2 md:gap-4 font-bold text-base md:text-lg">
              <p>Year: {product.year}</p>
              <p>Memory: {product["RAM"]}</p>
              <p>Warranty: {product.warranty_period}</p>
            </div>
            <div>
              <p className="font-bold text-xl">Features:</p>
              <ul className="list-disc list-inside pl-4">
                {product["features"].map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl">Price: {product.price}</p>
            </div>
            <div className="flex justify-start align-center gap-3">
              <ProductActionButton productId={id} />
              {!productInCart && (
                <button
                  className="btn-blue"
                  onClick={() => {
                    addItemToCartHandler();
                    setAddToCartMessage(true);
                  }}
                >
                  Add to cart
                </button>
              )}
              {productInCart && (
                <div className="flex justify-center items-center">
                  <button
                    className="btn-blue"
                    onClick={removeItemFromCartHandler}
                  >
                    {productInCart.quantity > 1 && (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                    {productInCart.quantity === 1 && (
                      <TrashIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </button>
                  <p className="font-semibold text-2xl mx-5">
                    {productInCart.quantity}
                  </p>
                  <button
                    className="btn-transparent"
                    onClick={addItemToCartHandler}
                  >
                    <PlusIcon className="h-6 w-6" aria-hidden="true"></PlusIcon>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              className="object-center scale-50 md:scale-75 lg:max-h-[603px] lg:max-w-[648px] z-0"
              src={require(`../assets/product_images/${product["title"]
                .replace(" ", "_")
                .toLowerCase()}.png`)}
              alt={product.title}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default ProductDetails;
