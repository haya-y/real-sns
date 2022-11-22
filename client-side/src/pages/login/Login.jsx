import React, { useRef } from 'react';
import './Login.css';

export default function Login() {
  const email = useRef('');
  const password = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('チェック');
    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Real SNS</h3>
          <span className='loginDesc'>本格的なSNSを、自分の手で</span>
        </div>
        <div className='loginRight' onSubmit={(e) => handleSubmit(e)}>
          <form className='loginBox'>
            <p className='loginMsg'>ログインはこちら</p>
            <input type='email' className='loginInput' placeholder='Eメール' required ref={email} />
            <input
              type='password'
              className='loginInput'
              placeholder='パスワード'
              required
              minLength={6}
              ref={password}
            />
            <button className='loginButton'>ログイン</button>
            <span className='loginForgot'>パスワードを忘れた方へ</span>
            <button className='loginRegisterButton'>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}
