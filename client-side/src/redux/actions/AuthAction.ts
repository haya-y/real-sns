import { User } from '../../types/User.types';
import { LOGIN } from '../types/AuthTypes';

export const LoginStart = (user: User) => ({
  type: LOGIN.START,
});

export const LoginSuccess = (user: User) => ({
  type: LOGIN.SUCCESS,
  payload: user,
});

export const LoginError = (error: any) => ({
  type: LOGIN.ERROR,
  payload: error,
});
