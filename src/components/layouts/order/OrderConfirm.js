import React from "react";
import styles from "../../styles/orderConfirm.module.css";
import { Table, Alert } from "react-bootstrap";

const OrderConfirm = () => {
  return (
    <div className={styles.orderConfirm}>
      <h2 className={styles.table__title}>
        Thank you. Your order has been received.
      </h2>
      <div>
        <Table responsive="sm" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>No Pesanan</th>
              <th>Tanggal</th>
              <th>Email</th>
              <th>Total</th>
              <th>Metode Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>
                <p className={styles.alert__succes}>Succes</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderConfirm;
