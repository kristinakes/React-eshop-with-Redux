import { Fragment} from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cartSlice";
import {deleteProduct} from "../store/productsActions";
import { uiActions } from "../store/uiSlice";

function ProductActionButton({ productId }) {
  const dispatch = useDispatch();

   const formOpenHandler = (action) => {
     dispatch(
       uiActions.showForm({ open: true, formAction: action, productId: productId })
     );
   };

  const productDeleteHandler = () => {
    dispatch(cartActions.deleteItemFromCart(productId));
    dispatch(deleteProduct(productId));
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center gap-x-1.5 bg-transparent rounded-md px-2 md:px-3 py-2 text-xs md:text-base uppercase font-semibold text-blue shadow-md border-solid
          border-grey border-1"
          >
            Menu
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg border-1 border-black border-opacity-5 focus:outline-none">
            <div className="flex flex-col p-2 gap-2 text-black">
              <Menu.Item>
                <button
                  className="bg-gray-100 px-4 py-2 text-base text-left text-leftrounded-md shadow-md border-solid
          border-grey border-1"
                  value="update"
                  onClick={(e) => formOpenHandler(e.target.value)}
                >
                  Edit
                </button>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/Products"}>
                  <button
                    className="bg-gray-100 px-4 py-2 text-base text-left shadow-md border-solid
                            border-grey border-1"
                    onClick={productDeleteHandler}
                  >
                    Delete
                  </button>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
export default ProductActionButton;
