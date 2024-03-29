import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { User } from '../types/User.types';
import { AuthReducer } from './reducers/AuthReducer';
import { AuthContextType, AuthState } from './types/AuthTypes';

/** 開発中であればtrue */
const isDev = false;
if (isDev) {
  console.warn('ログインのユーザー情報でダミーデータが使われています。');
}

const sampleUser: User = {
  _id: '630cab2bd25fba38373c5d63',
  username: 'tanaka',
  email: 'tanaka.test.mongoDB@gmail.com',
  password: '123456',
  profilePicture: '/person/2.jpeg',
  coverPicture: '/post/3.jpeg',
  followers: ['6304d19040d4092261cbeea3'],
  followings: ['636b92b170ad98f78123f74b', '658a598698a36b4bbf20849b'],
  isAdmin: false,
  createdAt: new Date('2022-08-29T12:03:55.966+00:00'),
  updatedAt: new Date('2024-01-10T22:07:10.474+00:00'),
  __v: 0,
  desc: 'Tanakaです。',
};

const initialState: AuthState = {
  user: isDev ? sampleUser : JSON.parse(localStorage.getItem('user')!),
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<AuthContextType>({ state: initialState, dispatch: () => {} });

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
