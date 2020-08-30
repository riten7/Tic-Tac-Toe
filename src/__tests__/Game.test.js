import React from "react";
import { mount } from "enzyme";
import Game from "../Game";

describe("Component renders properly", () => {
  const wrapper = mount(<Game />);
  it("Game renders successfully", () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.game-status').text()).toBe('Next player: X');
  });

  it("click on square board runs well", () => {
    wrapper.find('.square').at(0).simulate('click');
    expect(wrapper.find('.game-status').text()).toBe('Next player: O');
  });

  it("click on start game reset board", () => {
    wrapper.find('.button--new-game').simulate('click');
    expect(wrapper.find('.game-status').text()).toBe('Next player: X');
    expect(wrapper.find('.square').at(0).text()).toBe('');
  });

  it("test if the winner is shown when one player won", () => {
    wrapper.find('.square').at(3).simulate('click');
    wrapper.find('.square').at(5).simulate('click');
    wrapper.find('.square').at(7).simulate('click');
    wrapper.find('.square').at(4).simulate('click');
    wrapper.find('.square').at(11).simulate('click');
    wrapper.find('.square').at(8).simulate('click');
    wrapper.find('.square').at(15).simulate('click');
    wrapper.find('.square').at(12).simulate('click');
   
    expect(wrapper.find('.game-status').text()).toBe(' Congratulation! X have won');
  });
});