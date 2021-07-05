import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/login.module.css";
import logo from "../assets/picture/logo.png";
import { loginAction } from "../redux/actions/loginAction";
import { login } from "../redux/actions/userActions/auth";

const Login = (props) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(username, "wkwkwkwk");

  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const { message } = useSelector((state) => state.messageReducer);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Success");
    form.current.validateAll();

    //checkBtn -> <button>
    if (checkBtn.current.context._errors.length === 0) {
      console.log("check");
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/milan-tv");
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  // if (isLoggedIn) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <div className={styles.box}>
      <img
        className={styles.left_bg}
        src="https://pbs.twimg.com/media/E43NfC5VkAESHn0?format=jpg&name=orig"
      />
      {/*<div className={styles.loginbg}></div>*/}
      <div className={styles.login__card}>
        <img className={styles.logoLogin} src={logo} />
        <div className={styles.alignalign}>
          <p className={styles.usernameTitle}>Email</p>
          <input
            className={styles.login__input}
            // placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <p className={styles.usernameTitle}>Password</p>
          <input
            className={styles.psw__input}
            // placeholder="password"
            type="password"
          ></input>
        </div>
        <button className={styles.loginButton} onClick={handleClick}>
          Login
        </button>
        <div className={styles.forgot_register}>
          <p className={styles.usernameTitle}>Forgot Password</p>
          <div className={styles.accountRegister}>
            <p className={styles.usernameTitle}>Don't have an account?</p>
            <p className={styles.register_link}>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
