import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};
