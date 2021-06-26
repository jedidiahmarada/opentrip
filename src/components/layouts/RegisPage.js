import React from "react";
import styles from "../styles/regispage.module.css";
import { useHistory } from "react-router-dom";

const RegisPage = () => {
  const history = useHistory();

  const regisUserLink = () => {
    history.push("/regisuser");
  };

  const regisHosterLink = () => {
    history.push("/regishoster");
  };

  return (
    <div className={styles.regispage}>
      <div className={styles.regispage__background}>
        <div className={styles.regis__card}>
          <div>
            <p>Choose Registration</p>
            <button className={styles.regisUser__btn} onClick={regisUserLink}>
              Register as User
            </button>
          </div>
          <div>
            <button
              className={styles.regisHoster__btn}
              onClick={regisHosterLink}
            >
              Register as Hoster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisPage;
