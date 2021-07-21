import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Payment.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

import { getBankAsync } from "../../redux/actions/bankActions";

const Payment = () => {
  const [bankSet, setBankSet] = useState("");
  const history = useHistory();
  const oreceived = () => {
    history.push("/oreceived");
  };

  //untuk fetching dan maping API
  const { getBank } = useSelector((state) => state.bankReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankAsync());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="containerCheckout">
        <h1 className="judulPage">Checkout</h1>
        <hr className="solidDivider" />
        <div className="shapesCheckout">
          <div className="shapes2">
            <div className="recta2" />
            <div className="triaD2" />
            <div className="shapeFonts">
              <h5 className="shapeTit2">Billing</h5>
              <p className="shapeKet2">Fill Billing Details</p>
            </div>
          </div>
          <div className="shapes2">
            <div className="recta2" />
            <div className="triaD2" />
            <div className="shapeFonts">
              <h5 className="shapeTit2">Order</h5>
              <p className="shapeKet2">Fill Order Details</p>
            </div>
          </div>
          <div className="shapes1">
            <div className="recta1" />
            <div className="triaD1" />
            <div className="shapeFonts">
              <h5 className="shapeTit1">Payment</h5>
              <p className="shapeKet1">Fill Payment Details</p>
            </div>
          </div>
        </div>
        <div className="billCard">
          <h3 className="ordDet">Payment Details</h3>
          <p className="payKet">
            Payment using transfer via ATM, m-Banking or cash deposit. Payments
            are made to an Open Trip Virtual Account with the payment gateway
            NICEPAY. You will be automatically verified after making a payment.
            Your order will be active for 2 hours before it is automatically
            canceled by our system.
          </p>
          <p className="selPayBank">Select Payment Bank:</p>
          <div className="dropdownContainer">
            <DropdownButton
              className="selBankType"
              id="dropdown-basic-button"
              title="Pilih Bank"
              // eventKey={bankSet}
              onChange={(e) => setBankSet(e.target.value)}
            >
              {getBank &&
                getBank.map((type) => (
                  <Dropdown.Item href="#/action-1">
                    {type.bank_name}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </div>
          <p className="payKet2">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <button className="btnNextStepO" onClick={oreceived}>
            Make Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
