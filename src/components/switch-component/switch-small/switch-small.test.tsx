import * as React from "react";
import { shallow } from "enzyme";
import SwitchSmall from "./switch-small";

describe("SwitchSmall", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SwitchSmall />);
    expect(wrapper).toMatchSnapshot();
  });
});
