import * as React from "react";
import { shallow } from "enzyme";
import ChildtranslateComponent from "./childtranslate-component";

describe("ChildtranslateComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChildtranslateComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
