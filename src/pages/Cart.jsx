import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import Notification from "../components/Notification";


function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const notification = useSelector((state) => state.ui.notification);

  return (
    <div>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className="flex justify-between font-bold text-blue text-xl p-10">
        <h3>Shopping cart</h3>
        {cartItems.length !== 0 && <h3>Total: {cartTotalAmount.toFixed(2)}</h3>}
      </div>

      {cartItems.length === 0 && (
        
        <div className="text-center text-xl text-blue font-semibold rounded-md shadow-md max-w-fit p-10 m-auto">
          <p>Your shoping cart is empty. </p>
          <p>
            Go to{" "}
            <Link to="/Products" className="underline">
              Products page
            </Link>
          </p>
        </div>
      )}

      {cartItems.length > 0 && (
        <>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.quantity,
                  totalPrice: item.totalPrice,
                  year: item.year,
                  ram: item["RAM"],
                  warranty: item.warranty,
                  price: item.price,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
export default Cart;
