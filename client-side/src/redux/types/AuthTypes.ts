import { User } from '../../types/User.types';

/** ログイン時の3種類のaction */
export enum LOGIN {
  START = 'LOGIN_START',
  SUCCESS = 'LOGIN_SUCCESS',
  ERROR = 'LOGIN_ERROR',
}

/** LOGINの3つの定数の型 */
export type LoginType = LOGIN.START | LOGIN.SUCCESS | LOGIN.ERROR;

/** dispatchの引数に入れるactionの型 */
export type AuthAction = {
  type: LoginType;
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
