/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import styles from '../films/styles/films.module.scss';
// import stateContext from '../../context';

function signIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { dispatch } = useContext(stateContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/auth/signin', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    dispatch({ type: 'SIGN_IN', payload: data });
    navigate('/');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />
      <button type="submit">Авторизироваться</button>
    </form>
  );
}

export default signIn;
