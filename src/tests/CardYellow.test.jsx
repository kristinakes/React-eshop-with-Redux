import renderer from "react-test-renderer";

import CardYellow from "../components/CardYellow";

it("renders correctly when there is no features", () => {
    const tree = renderer.create(<CardYellow />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders correctly when there is a single feature", () => {
  const feature = [{icon: "wifi",
      title: "Wireless Freedom",
      text: "wireless gadgets that provide freedom of movement while using them",}];
  const tree = renderer.create(<CardYellow {...feature}/>).toJSON();
  expect(tree).toMatchSnapshot();
});