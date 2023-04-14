import React, { useEffect, useReducer } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../features/users/UsersList';
import NavBar from '../features/nav/NavBar';
import MainPage from '../features/main/MainPage';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import * as api from './api';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getUsers().then((data) => dispatch({ type: 'GET_USERS', payload: data }));
    api.checkUser().then((data) => dispatch({ type: 'CHECK_USER', payload: data }));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;