import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const Register = () => {
  const username = useRef<any>('');
  const email = useRef<any>('');
  const password = useRef<any>('');
  const passwordConfirmation = useRef<any>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity('パスワードが違います。');
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <h3 className='registerLogo'>Real SNS</h3>
          <span className='registerDesc'>本格的なSNSを、自分の手で</span>
        </div>
        <div className='registerRight'>
          <form className='registerBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='registerMsg'>新規登録はこちら</p>
            <input type='text' className='registerInput' placeholder='ユーザー名' required ref={username} />
            <input type='email' className='registerInput' placeholder='Eメール' required ref={email} />
            <input
              type='password'
              className='registerInput'
              placeholder='パスワード'
              required
              minLength={6}
              ref={password}
            />
            <input
              type='password'
              className='registerInput'
              placeholder='確認用パスワード'
              required
              minLength={6}
              ref={passwordConfirmation}
            />
            <button className='registerButton' type='submit'>
              サインアップ
            </button>
            <button className='registerRegisterButton'>ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
};
