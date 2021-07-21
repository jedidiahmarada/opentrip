import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { travRegisAsync } from "../../redux/actions/travRegisAction";

import styles from "../../styles/regisUser.module.css";
import Header from "../Header";
import Footer from "../Footer";

const RegisUser = () => {
  const [usernameset, setUsernameset] = useState("");
  const [password, setPassword] = useState("");
  const [emailset, setEmailset] = useState("");

  const { username, email, loading, error, errorMessage } = useSelector(
    (state) => state.travRegisReducer
  );
  console.log(email, "email");
  console.log(username, "username");

  const dispatch = useDispatch();
  const history = useHistory();
  console.log(emailset, "wkwkwkwk email");
  console.log(usernameset, "wkwkwkwk username");

  const handleClick = () => {
    // e.preventDefault();
    dispatch(travRegisAsync(usernameset, emailset, password));
  };

  return (
    <div>
      <Header />
      <div className={styles.regisUser__background}>
        <div className={styles.regisUser__card}>
          <div className={styles.regisUser__input}>
            <p className={styles.regisUser__title}>Register</p>
            <p className={styles.unameTitle}>User Name</p>
            <input
              className={styles.regisUser__inputUsername}
              value={usernameset}
              onChange={(e) => setUsernameset(e.target.value)}
            ></input>
            <p className={styles.emailTitle}>Email</p>
            <input
              className={styles.regisUser__inputEmail}
              value={emailset}
              onChange={(e) => setEmailset(e.target.value)}
            ></input>
            <p className={styles.pwTitle}>Password</p>
            <input
              className={styles.regisUser__inputPassword}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div>
              {loading && <div>loading...</div>}
              {error && <div>{errorMessage}</div>}
              {!loading && (
                <button className={styles.regisUser__btn} onClick={handleClick}>
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisUser;
