import React, { ReactNode, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

type AuthContextState = {
  user: any;
  isFetching: boolean;
  error: boolean;
  dispatch: React.Dispatch<any>;
};

const initialState: AuthContextState = {
  user: null,
  isFetching: false,
  error: false,
  dispatch: () => {},
};

export const AuthContext = React.createContext<AuthContextState>(initialState);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
