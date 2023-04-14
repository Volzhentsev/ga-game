/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import styles from "../films/styles/films.module.scss";
// import stateContext from '../../context';

function signUp(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch("/auth/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    dispatch({ type: "SIGN_UP", payload: data });
    navigate("/");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="title"
        type="text"
      />
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />
      <button type="submit">Загеристрироваться</button>
    </form>
  );
}

export default signUp;
