import React from 'react';
import styles from '../styles/PaymentDet.css'
import {DropdownButton, Dropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const OrderDet = () => {
  return (
    <div className={styles.payBg}>
      <div className='containerCheckout'>
        <h1 className='judulPage'>Checkout</h1>
        <hr className='solidDivider'/>
        <div className='shapesCheckout'>
          <div className='shapes2'>
            <div className='recta2'/>
            <div className='triaD2'/>
            <div className='shapeFonts'>
              <h5 className='shapeTit2'>Billing</h5>
              <p className='shapeKet2'>Fill Billing Details</p>
            </div>
          </div>
          <div className='shapes2'>
            <div className='recta2'/>
            <div className='triaD2'/>
            <div className='shapeFonts'>
              <h5 className='shapeTit2'>Order</h5>
              <p className='shapeKet2'>Fill Order Details</p>
            </div>
          </div>
          <div className='shapes1'>
            <div className='recta1'/>
            <div className='triaD1'/>
            <div className='shapeFonts'>
              <h5 className='shapeTit1'>Payment</h5>
              <p className='shapeKet1'>Fill Payment Details</p>
            </div>
          </div>
        </div>
        <div className='billCard'>
          <h3 className='ordDet'>Payment Details</h3>
          <p className='payKet'>Payment using transfer via ATM, m-Banking or cash deposit. Payments are made to an Open
            Trip Virtual Account with the payment gateway NICEPAY. You will be automatically verified after making a
            payment. Your order will be active for 2 hours before it is automatically canceled by our system.</p>
          <p className='selPayBank'>Select Payment Bank:</p>
          <DropdownButton className="selBankType" id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <p className='payKet2'>Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.</p>
          <button className='btnNextStepO'>Make Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDet;