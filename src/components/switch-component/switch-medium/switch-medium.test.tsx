import * as React from "react";
import { shallow } from "enzyme";
import SwitchMedium from "./switch-medium";

describe("SwitchMedium", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SwitchMedium />);
    expect(wrapper).toMatchSnapshot();
  });
});
