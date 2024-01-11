import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledRegisterDiv } from './Register.styles';
import { useCallback } from 'react';

export const Register = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.current?.value !== passwordConfirmation.current?.value) {
      // TODO setCustomValidityでは一度パスワードを間違えると再リロードが必要になる
      passwordConfirmation.current?.setCustomValidity('パスワードが一致していません。');
    } else {
      try {
        const user = {
          username: username.current?.value,
          email: email.current?.value,
          password: password.current?.value,
        };
        await axios.post('/auth/register', user);
        // TODO navigate('/')でホームに移動したいが、登録後に画面遷移しない
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <StyledRegisterDiv>
      <div className='registerWrapper'>
        <div className='registerWrapper-left'>
          <h3 className='registerWrapper-left-logo'>Real SNS</h3>
          <span className='registerWrapper-left-desc'>本格的なSNSを、自分の手で</span>
        </div>
        <div className='registerWrapper-right'>
          <form className='registerWrapper-right-box' onSubmit={(e) => handleSubmit(e)}>
            <p className='registerWrapper-right-box-msg'>新規登録はこちら</p>
            <input
              type='text'
              className='registerWrapper-right-box-registerInput'
              placeholder='ユーザー名'
              required
              ref={username}
            />
            <input
              type='email'
              className='registerWrapper-right-box-registerInput'
              placeholder='Eメール'
              required
              ref={email}
            />
            <input
              type='password'
              className='registerWrapper-right-box-registerInput'
              placeholder='パスワード'
              required
              minLength={6}
              ref={password}
            />
            <input
              type='password'
              className='registerWrapper-right-box-registerInput'
              placeholder='確認用パスワード'
              required
              minLength={6}
              ref={passwordConfirmation}
            />
            <button className='registerWrapper-right-box-signUpButton' type='submit'>
              サインアップ
            </button>
            <button className='registerWrapper-right-box-loginButton'>ログイン</button>
          </form>
        </div>
      </div>
    </StyledRegisterDiv>
  );
};
