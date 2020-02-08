import React from "react";
import { shallow, findByClass } from "../../helpers/testHelpers";
import Menu from "./Menu";

const wrapper = shallow(<Menu></Menu>);

describe("Menu Component", () => {
  it("renders without any errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
