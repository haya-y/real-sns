import { AuthAction, AuthState, LOGIN } from '../types/AuthTypes';

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN.START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN.SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN.ERROR:
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
