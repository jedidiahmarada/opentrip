import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/login.module.css";
import { loginAction } from "../redux/actions/loginAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  console.log(username, "wkwkwkwk");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginAction(username));
  };

  return (
    <div className={styles.box}>
      <div className={styles.loginbg}></div>
      <div className={styles.login__card}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input placeholder="password"></input>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
