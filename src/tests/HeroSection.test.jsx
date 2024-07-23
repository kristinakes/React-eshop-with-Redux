import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import HeroSection from "../components/HeroSection";

it("renders HeroSection correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
