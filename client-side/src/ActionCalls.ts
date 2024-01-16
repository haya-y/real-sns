import { LoginCredentials, authorizeLogin } from './api/auth/AuthApi';
import { AuthAction, LOGIN } from './redux/types/AuthTypes';

export const loginCall = async (loginCredentials: LoginCredentials, dispatch: React.Dispatch<AuthAction>) => {
  dispatch({ type: LOGIN.START });
  try {
    const loginUser = await authorizeLogin(loginCredentials);
    dispatch({ type: LOGIN.SUCCESS, payload: loginUser });
  } catch (err) {
    dispatch({ type: LOGIN.ERROR, payload: err });
  }
};
