import React from 'react';
import styles from '../styles/OrderDet.module.css'

const OrderDet = () => {
  return (
    <div className={styles.containerCheckout}>
      <h1 className={styles.judulPage}>Checkout</h1>
      <hr className={styles.solidDivider}/>
      <div className={styles.shapesCheckout}>
        <div className={styles.shapes2}>
          <div className={styles.recta2}/>
          <div className={styles.triaD2}/>
          <div className={styles.shapeFonts}>
            <h5 className={styles.shapeTit2}>Billing</h5>
            <p className={styles.shapeKet2}>Fill Billing Details</p>
          </div>
        </div>
        <div className={styles.shapes1}>
          <div className={styles.recta1}/>
          <div className={styles.triaD1}/>
          <div className={styles.shapeFonts}>
            <h5 className={styles.shapeTit1}>Order</h5>
            <p className={styles.shapeKet1}>Fill Order Details</p>
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
        <h3 className={styles.billDet}>Order Details</h3>
        <div className={styles.kontenIsi}>
          <div className={styles.bagKiri}>
            <h4 className={styles.judulPaket}>Paket Wisata Gunung Bromo</h4>
            <p className={styles.ketPaket}>Hoster : Bromo Night Trip</p>
          </div>
          <div className={styles.bagKanan}>
q
          </div>
        </div>
        <button className={styles.btnNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default OrderDet;