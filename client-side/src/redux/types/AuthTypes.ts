import { User } from '../../types/User.types';

/** ログイン時の3種類のaction */
export enum LOGIN {
  START = 'LOGIN_START',
  SUCCESS = 'LOGIN_SUCCESS',
  ERROR = 'LOGIN_ERROR',
}

export const LOGOUT = 'LOGOUT';
type Logout = typeof LOGOUT;

/** 認証時の定数の型 */
type AuthType = LOGIN.START | LOGIN.SUCCESS | LOGIN.ERROR | Logout;

/** dispatchの引数に入れるactionの型 */
export type AuthAction = {
  type: AuthType;
  payload?: User | any;
};

/** ログイン状態の型 */
export type AuthState = {
  user: User | null;
  isFetching: boolean;
  error: boolean;
};

/** Contextで初期化する型 */
export type AuthContextType = { state: AuthState; dispatch: React.Dispatch<AuthAction> };
