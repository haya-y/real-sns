import axios from 'axios';
import { AuthAction, LOGIN } from './redux/types/AuthTypes';

export const loginCall = async (user: { email: string; password: string }, dispatch: React.Dispatch<AuthAction>) => {
  dispatch({ type: LOGIN.START });
  try {
    const response = await axios.post('auth/login', user);
    dispatch({ type: LOGIN.SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: LOGIN.ERROR, payload: err });
  }
};
