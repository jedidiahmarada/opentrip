import React from 'react';
import styles from '../styles/BillingDet.module.css'

const BillingDet = () => {
  return (
    <div className={styles.billBg}>
      <div className={styles.containerCheckout}>
        <h1 className={styles.judulPage}>Checkout</h1>
        <hr className={styles.solidDivider}/>
        <div className={styles.shapesCheckout}>
          <div className={styles.shapes1}>
            <div className={styles.recta1}/>
            <div className={styles.triaD1}/>
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit}>Billing</h5>
              <p className={styles.shapeKet}>Fill Billing Details</p>
            </div>
          </div>
          <div className={styles.shapes2}>
            <div className={styles.recta2}/>
            <div className={styles.triaD2}/>
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit2}>Order</h5>
              <p className={styles.shapeKet2}>Fill Order Details</p>
            </div>
          </div>
          <div className={styles.shapes2}>
            <div className={styles.recta2}/>
            <div className={styles.triaD2}/>
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit2}>Payment</h5>
              <p className={styles.shapeKet2}>Fill Payment Details</p>
            </div>
          </div>
        </div>
        <div className={styles.billCard}>
          <h3 className={styles.billDet}>Billing Details</h3>
          <div className={styles.billInp}>
            <p className={styles.judInp}>Full Name</p>
            <input className={styles.inputanNya}/>
            <p className={styles.judInp}>Phone Number</p>
            <input className={styles.inputanNya} type='number'/>
            <p className={styles.judInp}>Email</p>
            <input className={styles.inputanNya} type='email'/>
          </div>
          <div className={styles.cekbok}>
            <input type='checkbox' id='cekbok' className={styles.cekbokPromo}/>
            <label htmlFor='cekbok' className={styles.cekbokTul}>Send me information about promos, news, and
              update</label>
          </div>
          <button className={styles.btnNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default BillingDet;