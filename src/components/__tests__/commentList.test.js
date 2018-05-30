import React from "react";
import { mount } from "enzyme";

import { Root } from "Root";
import CommentList from "components/CommentList";

let component;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => component.unmount());

it("Should create an <li> per comment", () => {
  expect(component.find("li").length).toEqual(2);
});

it("Shows the text for each comment", () => {
  expect(component.render().text()).toContain("Comment 1");
  expect(component.render().text()).toContain("Comment 2");
});
