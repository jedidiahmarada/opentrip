import React from "react";
import styles from "../styles/orderConfirm.module.css";
import { Table, Button } from "react-bootstrap";

const OrderConfirm = () => {
  return (
    <div>
      {" "}
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
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderConfirm;
