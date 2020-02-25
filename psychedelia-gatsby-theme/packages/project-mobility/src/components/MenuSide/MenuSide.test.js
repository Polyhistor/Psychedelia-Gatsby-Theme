import React from "react";
import { shallow, findByClass } from "../../helpers/testHelpers";
import MenuSide from "./MenuSide";

const wrapper = shallow(<MenuSide></MenuSide>);

describe("Menu Component", () => {
  it("renders without any errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
