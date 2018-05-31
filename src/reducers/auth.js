import { IS_SIGNED_IN } from "actions/types";

const initialState = false;

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case IS_SIGNED_IN:
      return action.payload;
    default:
      return state;
  }
};
