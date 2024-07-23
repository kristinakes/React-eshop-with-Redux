import { renderWithProviders } from "../utils/utils-for-tests";
import { MemoryRouter } from "react-router-dom";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../pages/Cart";

const cartState = {
  id: 1,
  items: [
    {
      id: 1,
      title: "laptop",
      price: 10,
      year: 2020,
      RAM: "5",
      warranty: "2 years",
      totalPrice: 20,
      quantity: 2,
    },
  ],
  totalQuantity: 2,
  totalAmount: 20,
};

describe("Cart page", () => {
  test("should render page correctly when there is no items in cart", () => {
    renderWithProviders(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /products page/i });
    expect(link).toHaveAttribute("href", "/Products");
  });

  // test("should render item in cart if there are items in store", () => {
  //   renderWithProviders(
  //     <MemoryRouter>
  //       <Cart />
  //     </MemoryRouter>,
  //     {
  //       preloadedState: { cart: cartState },
  //     }
  //   );

  //   //Assert if total cart price rendered correctly
  //    const totalPrice = screen.getByRole('heading', {name: /total/i});
  //    expect(totalPrice).toHaveTextContent(cartState.totalAmount);
  //     //Assert if product image is rendered
  //   expect(screen.getByRole('img')).toBeInTheDocument();
  // });

  
  //Snapshot test for cart page
  test('should match snapshot if item exists in cart store', () => { 
    const view = renderWithProviders(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      {
        preloadedState: { cart: cartState },
      }
    );

    expect(view.baseElement).toMatchSnapshot();
  })

  test('should increase/decrease product quantity in cart', async() => { 
    const {store} = renderWithProviders(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      {
        preloadedState: { cart: cartState },
      }
    );

    const buttons = screen.getAllByRole('button');
    await fireEvent.click(buttons[1]);  

    expect(store.getState().cart.totalQuantity).toBe(3);
    expect(store.getState().cart.totalAmount).toBe(30);

    await fireEvent.click(buttons[0]);  
    expect(store.getState().cart.totalQuantity).toBe(2);

  })
});
