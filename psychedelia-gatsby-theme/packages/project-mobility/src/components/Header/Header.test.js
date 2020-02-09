import React from "react";
import { shallow, findByClass } from "../../helpers/testHelpers";
import Header from "./Header";

const wrapper = shallow(<Header></Header>);

describe("Header Component", () => {
  it("renders without any errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
