import * as React from "react";
import { shallow } from "enzyme";
import TranslateComponent from "./translate-component";

describe("TranslateComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TranslateComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
