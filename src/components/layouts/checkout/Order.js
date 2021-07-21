import React from "react";
import styles from "../../styles/Order.module.css";
import { useHistory } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const Order = () => {
  const history = useHistory();
  const payment = () => {
    history.push("/checkout/order/payment");
  };
  return (
    <>
      <Header />
      <div className={styles.containerCheckout}>
        <h1 className={styles.judulPage}>Checkout</h1>
        <hr className={styles.solidDivider} />
        <div className={styles.shapesCheckout}>
          <div className={styles.shapes2}>
            <div className={styles.recta2} />
            <div className={styles.triaD2} />
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit2}>Billing</h5>
              <p className={styles.shapeKet2}>Fill Billing Details</p>
            </div>
          </div>
          <div className={styles.shapes1}>
            <div className={styles.recta1} />
            <div className={styles.triaD1} />
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit1}>Order</h5>
              <p className={styles.shapeKet1}>Fill Order Details</p>
            </div>
          </div>
          <div className={styles.shapes2}>
            <div className={styles.recta2} />
            <div className={styles.triaD2} />
            <div className={styles.shapeFonts}>
              <h5 className={styles.shapeTit2}>Payment</h5>
              <p className={styles.shapeKet2}>Fill Payment Details</p>
            </div>
          </div>
        </div>
        <div className={styles.billCard}>
          <h3 className={styles.ordDet}>Order Details</h3>

          <div className={styles.kontenIsi}>
            <div className={styles.bagJudPaket}>
              <h4 className={styles.judulPaket}>Pulau Komodo, NTT</h4>
              <p className={styles.tanggalTrip}>Tanggal Trip : 12-06-2021</p>
            </div>

            <div className={styles.bagIsiPaket}>
              <p className={styles.ketPaket}>Hoster : Bromo Night Trip</p>
              <div className={styles.hargaTrip}>
                <p className={styles.nominalHarga}>Rp. 1.200.000</p>
                <p className={styles.satuanHarga}> / orang</p>
              </div>
            </div>

            <p className={styles.jumOrg}>Jumlah : 2 Orang</p>
          </div>

          <div className={styles.totalHrga}>
            <h2 className={styles.judtot}>Total</h2>
            <h2 className={styles.totHrga}>Rp. 2.400.000</h2>
          </div>
          {/*<hr className={styles.solidDivider}/>*/}

          <button className={styles.btnNextStepO} onClick={payment}>
            Next Step
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
