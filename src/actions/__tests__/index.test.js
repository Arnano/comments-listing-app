import { saveComments } from "actions";
import { SAVE_COMMENTS } from "actions/types";

describe("Describe save comments action creator", () => {
  it("Should have the correct type", () => {
    const action = saveComments();
    expect(action.type).toEqual(SAVE_COMMENTS);
  });

  it("Should have the correct payload", () => {
    const action = saveComments("New comment");
    expect(action.payload).toEqual("New comment");
  });
});
