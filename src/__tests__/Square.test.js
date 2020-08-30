import React from "react";
import { mount } from "enzyme";
import Square from "../Square";

const props = {
  value: 'X',
  winnerClass: "",
}

describe("Component renders properly", () => {
  it("Test Square", () => {
    const wrapper = mount(<Square {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});