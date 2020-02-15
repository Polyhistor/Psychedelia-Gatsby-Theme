import React from "react";
import { shallow, findByClass } from "../../helpers/testHelpers";
import Navigation from "./Navigation";

const wrapper = shallow(<Navigation></Navigation>);

describe("Navigation Component", () => {
  it("renders without any errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
