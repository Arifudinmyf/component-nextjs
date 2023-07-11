import * as React from "react";
import { shallow } from "enzyme";
import SwitchLarge from "./switch-large";

describe("SwitchLarge", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SwitchLarge />);
    expect(wrapper).toMatchSnapshot();
  });
});
