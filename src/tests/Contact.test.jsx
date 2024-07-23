import Contact from "../pages/Contact";
import { render } from '@testing-library/react'

describe('ContactPage', () => {
    it('renders page correctly', () => {
        const view = render(<Contact />);

        expect(view.baseElement).toMatchSnapshot();
    })
})