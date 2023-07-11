import * as React from "react";
import { shallow } from "enzyme";
import SampleComponent from "./sample-component";

describe("SampleComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SampleComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
