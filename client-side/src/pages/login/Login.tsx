import React, { useContext, useRef } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { StyledLoginDiv } from './Login.styles';

export const Login = () => {
  const email = useRef<any>('');
  const password = useRef<any>('');
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch,
    );
  };

  return (
    <StyledLoginDiv>
      <div className='loginWrapper'>
        <div className='loginWrapper-left'>
          <h3 className='loginWrapper-left-logo'>Real SNS</h3>
          <span className='loginWrapper-left-desc'>本格的なSNSを、自分の手で</span>
        </div>
        <div className='loginWrapper-right' onSubmit={(e) => handleSubmit(e)}>
          <form className='loginWrapper-right-box'>
            <p className='loginWrapper-right-box-msg'>ログインはこちら</p>
            <input type='email' className='loginWrapper-right-box-loginInput' placeholder='Eメール' required ref={email} />
            <input
              type='password'
              className='loginWrapper-right-box-loginInput'
              placeholder='パスワード'
              required
              minLength={6}
              ref={password}
            />
            <button className='loginWrapper-right-box-loginButton'>ログイン</button>
            <span className='loginWrapper-right-box-loginForgot'>パスワードを忘れた方へ</span>
            <button className='loginWrapper-right-box-registerButton'>アカウント作成</button>
          </form>
        </div>
      </div>
    </StyledLoginDiv>
  );
};
