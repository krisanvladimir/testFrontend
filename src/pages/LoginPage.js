import styled from 'styled-components';
import { useState } from 'react';
import { loginApi } from '../api';

const LoginPageUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginContainerUI = styled.div`
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;

  input {
    height: 20px;
  }

  .title {
    text-align: center;
  }
`;

export const LoginPage = ({ setAuth }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onChangeHandler = (value, key) => {
    if (key === 'login') {
      setLogin(value);
    }
    if (key === 'password') {
      setPassword(value);
    }
  };
  const onLoginHandler = () => {
    const result = loginApi(login, password);
    result.success && setAuth();
    !result.success && setMessage(result.message);
  };

  return (
    <LoginPageUI>
      <LoginContainerUI>
        <div className={'title'}>Авторизация</div>
        <input
          type="text"
          placeholder={'Логин'}
          value={login}
          onChange={(event) => onChangeHandler(event.target.value, 'login')}
        />
        <input
          type="password"
          value={password}
          placeholder={'Пароль'}
          onChange={(event) => onChangeHandler(event.target.value, 'password')}
        />
        {message && <div>{message}</div>}
        <button onClick={onLoginHandler}>Войти</button>
      </LoginContainerUI>
    </LoginPageUI>
  );
};
