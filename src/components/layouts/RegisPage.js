import React from "react";
import styles from "../styles/regispage.module.css";
import { useHistory } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const RegisPage = () => {
  const history = useHistory();

  const regisUserLink = () => {
    history.push("/regisuser");
  };

  const regisHosterLink = () => {
    history.push("/regishoster");
  };

  return (
    <>
      <Header />
      <div className={styles.regispage}>
        <div className={styles.regispage__background}>
          <div className={styles.regis__card}>
            <div>
              <p>Choose Registration</p>
              <button className={styles.regisUser__btn} onClick={regisUserLink}>
                Register as User
              </button>
              <hr className={styles.line}></hr>
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
      <Footer />
    </>
  );
};

export default RegisPage;
