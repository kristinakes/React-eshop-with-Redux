import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import ProductCard from "../components/ProductCard";
import { uiActions } from "../store/uiSlice";

function Products() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products.products);

  //useCallback to avoid function recreation when product list updates
  const formOpenHandler = useCallback(function formOpenHandler(
    status,
    action,
    id
  ) {
    dispatch(
      uiActions.showForm({ open: status, formAction: action, productId: id })
    );
  },
  [dispatch]);

  return (
    <div className="container flex flex-col m-auto my-20">
      <div className="flex justify-end">
        <button
          value="add"
          onClick={(e) => formOpenHandler(true, e.target.value, null)}
          className="uppercase bg-blue px-2 md:px-3 py-2 rounded-md border-solid border-grey border-2 font-semibold text-xs md:text-base text-white shadow-md"
        >
          add new product
        </button>
      </div>

      <div className="container">
        {productList && (
          <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-3 justify-items-center py-10">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                title={product.title}
                price={product.price}
                shortDescription={product.short_description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Products;
