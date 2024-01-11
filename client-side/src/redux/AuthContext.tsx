import { createContext, ReactNode, useReducer } from 'react';
import { AuthReducer } from './reducers/AuthReducer';
import { AuthContextType, AuthState } from './types/AuthTypes';

const initialState: AuthState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<AuthContextType>({ state: initialState, dispatch: () => {} });

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
