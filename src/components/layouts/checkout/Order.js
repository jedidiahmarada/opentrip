import React from "react";
import styles from "../../styles/Order.module.css";
import { useHistory } from "react-router";

const Order = () => {
  const history = useHistory();
  const payment = () => {
    history.push("/checkout/order/payment");
  };
  return (
    <div className={styles.containerCheckout}>
      <h1 className={styles.judulPage}>Checkout</h1>
      <hr className={styles.solidDivider} />
      <div className={styles.shapesCheckout}>
        <div className={styles.shapes1}>
          <div className={styles.recta1} />
          <div className={styles.triaD1} />
          <div className={styles.shapeFonts}>
            <h5 className={styles.shapeTit}>Billing</h5>
            <p className={styles.shapeKet}>Fill Billing Details</p>
          </div>
        </div>
        <div className={styles.shapes2}>
          <div className={styles.recta2} />
          <div className={styles.triaD2} />
          <div className={styles.shapeFonts}>
            <h5 className={styles.shapeTit2}>Order</h5>
            <p className={styles.shapeKet2}>Fill Order Details</p>
          </div>
        </div>
        <div className={styles.shapes3}>
          <div className={styles.recta3} />
          <div className={styles.triaD3} />
          <div className={styles.shapeFonts3}>
            <h5 className={styles.shapeTit3}>Payment</h5>
            <p className={styles.shapeKet3}>Fill Payment Details</p>
          </div>
        </div>
      </div>
      <div className={styles.billCard}>
        <h3 className={styles.billDet}>Order Details</h3>
        <div className={styles.billInp}></div>
        <div className={styles.cekbok}></div>
        <button className={styles.btnNextStep} onClick={payment}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Order;
