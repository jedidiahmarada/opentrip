import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/actions/loginAction";

import styles from "../styles/login.module.css";
import logo from "../assets/picture/logo.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [emailset, setEmailset] = useState("");

  const { email, loading, error, errorMessage } = useSelector(
    (state) => state.loginReducer
  );
  console.log(email, "ini email");

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(emailset, "wkwkwkwk");

  const home = () => {
    history.push("/");
  };

  const regisLink = () => {
    history.push("/registration");
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginAsync(emailset, password, history));
  };

  return (
    <div className={styles.box}>
      <img
        className={styles.left_bg}
        src="https://pbs.twimg.com/media/E43NfC5VkAESHn0?format=jpg&name=orig"
      />
      {/*<div className={styles.loginbg}></div>*/}
      <div className={styles.login__card}>
        <img className={styles.logoLogin} src={logo} onClick={home} />
        <div className={styles.alignalign}>
          <p className={styles.usernameTitle}>Email</p>
          <input
            className={styles.login__input}
            value={emailset}
            onChange={(e) => setEmailset(e.target.value)}
          ></input>
        </div>
        <div>
          <p className={styles.usernameTitle}>Password</p>
          <input
            className={styles.psw__input}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {loading && <div>loading...</div>}
        {error && <div>{errorMessage}</div>}
        {!loading && (
          <button className={styles.loginButton} onClick={handleClick}>
            Login
          </button>
        )}
        <div className={styles.forgot_register}>
          <p className={styles.usernameTitle}>Forgot Password</p>
          <div className={styles.accountRegister}>
            <p className={styles.usernameTitle}>Don't have an account?</p>
            <p className={styles.register_link} onClick={regisLink}>
              Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
