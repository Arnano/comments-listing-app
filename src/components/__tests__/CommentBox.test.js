import React from "react";
import { mount } from "enzyme";

import { Root } from "Root";
import CommentBox from "components/CommentBox";

let component;

beforeEach(
  () =>
    (component = mount(
      <Root>
        <CommentBox />
      </Root>
    ))
);
afterEach(() => component.unmount());

it("Should have a textarea and two buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: {
        value: "New comment"
      }
    });

    component.update();
  });

  it("Should have a textarea that a user can type in", () => {
    expect(component.find("textarea").prop("value")).toEqual("New comment");
  });

  it("Should clear the textarea when the form is submitted", () => {
    component.find("form").simulate("submit");
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
