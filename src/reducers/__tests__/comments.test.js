import { comments } from "reducers/comments";
import { SAVE_COMMENTS } from "actions/types";

it("Should handle actions of type saved comments", () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: "New comment"
  };

  const newState = comments([], action);
  expect(newState).toEqual(["New comment"]);
});

it("Should handle actions with unknown types", () => {
  const action = {};
  const newState = comments([], action);
  expect(newState).toEqual([]);
});
