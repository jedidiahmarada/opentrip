import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "../styles/login.module.css";
import {loginAction} from "../redux/actions/loginAction";

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
      <img className='left-bg' src='https://pbs.twimg.com/media/E41VcZgVgAAtZ5s?format=jpg&name=orig'/>
      {/*<div className={styles.loginbg}></div>*/}
      <div className={styles.login__card}>
        <p>Username</p>
        <input
          className={styles.login__input}
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          className={styles.pswrd__input}
          placeholder="password"
          type="password"
        ></input>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
