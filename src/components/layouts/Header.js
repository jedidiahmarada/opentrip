import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import styles from "../styles/header.module.css";
import logo from "../assets/picture/logo.png";

const Header = () => {
  const history = useHistory();

  const { token } = useSelector((state) => state.loginReducer);

  const home = () => {
    history.push("/");
  };

  const destination = () => {
    history.push("/destination");
  };

  const loginLink = () => {
    history.push("/login");
  };

  const regisLink = () => {
    history.push("/registration");
  };

  const mabur = () => {
    const store = window.localStorage;
    store.clear("");
    window.location.reload();
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__nav}>
        <div className={styles.header__nav__container}>
          <div>
            <button className={styles.header__nav__home} onClick={home}>
              Home
            </button>
          </div>
          <div>
            <button
              className={styles.header__nav__destination}
              onClick={destination}
            >
              Destination
            </button>
          </div>
        </div>
      </div>
      <img className={styles.logoHeader} src={logo} alt="logo"  />
      <div className={styles.header__user}>
        <div className={styles.header__user__container}>
          {token ? (
            <div>
              <button className={styles.header__signup__btn} onClick={mabur}>
                LOGOUT
              </button>
            </div>
          ) : (
            <>
              <div>
                <button
                  className={styles.header__login__btn}
                  onClick={loginLink}
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className={styles.header__signup__btn}
                  onClick={regisLink}
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
