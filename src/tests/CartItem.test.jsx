import { renderWithProviders } from "../utils/utils-for-tests";
import CartItem from "../components/CartItem";
import { MemoryRouter } from "react-router-dom";

describe("CartItem", () => {
  const item = {
    id: 1,
    title: "laptop",
    quantity: 1,
    totalPrice: 10,
    year: 2020,
    ram: 5,
    warranty: 2,
    price: 10,
  };

  it("renders correctly when there is a single item in cart", () => {
    const view = renderWithProviders(
      <MemoryRouter>
        <CartItem item={item} />
      </MemoryRouter>
    );
    
    expect(view.baseElement).toMatchSnapshot();
  });
});
