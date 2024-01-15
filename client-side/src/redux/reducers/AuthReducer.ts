import { AuthAction, AuthState, LOGIN, LOGOUT } from '../types/AuthTypes';

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
    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
