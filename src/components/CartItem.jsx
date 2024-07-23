import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import { cartActions } from "../store/cartSlice";

function CartItem(props) {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, year, ram, warranty, price } =
    props.item;

  const imageName = title.replace(" ", "_").toLowerCase();
   const image = `/assets/product_images/${imageName}.png`;

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.updateItemInCart(id));
  };

  const addItemToCartHAndler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        totalPrice,
        year,
        ram,
        warranty,
        price,
      })
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 min-w-fit justify-center content-center sm:grid-cols-4 sm:gap-2 shadow-md m-5 p-3">
      <div className="size-48 m-auto">
        <Link to={`/Product/${id}`}>
          <img
            className="object-fill scale-75 z-0"
            src={image}
            alt={title}
          />
        </Link>
      </div>
      <div>
        <Link to={`/Product/${id}`}>
          <h3 className="font-bold text-xl text-blue my-5">{title}</h3>
        </Link>
        <div className="font-semibold flex flex-wrap gap-3 md:flex-col md:gap-1">
          <p>Year: {year}</p>
          <p>RAM memory: {ram}</p>
          <p>Warranty: {warranty}</p>
          <p>Price: {price}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button id="remove-item-btn" className="btn-blue" onClick={removeItemFromCartHandler}>
          {quantity > 1 && <MinusIcon className="h-6 w-6" aria-hidden="true" />}
          {quantity === 1 && (
            <TrashIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
        <p className="font-semibold text-4xl mx-5">{quantity}</p>
        <button id="add-item-btn" className="btn-transparent" onClick={addItemToCartHAndler}>
          <PlusIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="font-bold text-xl m-auto">
        <p>Total: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
export default CartItem;
