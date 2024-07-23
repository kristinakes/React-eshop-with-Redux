import { MemoryRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import { renderWithProviders } from "../utils/utils-for-tests";

describe('Navigation Bar', () => {
    test('should match the snapshot', () => {
        const view = renderWithProviders(
          <MemoryRouter>
            <NavBar />
          </MemoryRouter>
        );

        expect(view.baseElement).toMatchSnapshot();
    })
})