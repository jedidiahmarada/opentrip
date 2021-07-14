import React from "react";
import styles from "../../styles/orderConfirm.module.css";
import { Table, Accordion, Card, Button } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

const OrderReceived = () => {
  return (
    <>
      <Header />
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
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          {/* <table className={styles.table1}>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
            </tr>
          </table> */}
        </div>
        <div>
          <h4 className={styles.title__deskripsi}>Nicepay Secure Payment</h4>
        </div>
        <div>
          <Table
            responsive="sm"
            hover
            borderless="true"
            size="sm"
            className={styles.deskripsi__table}
          >
            <tbody>
              <tr>
                <td>Deskripsi</td>
                <td>:Table cell</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Bank</td>
                <td>:Table cell</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Virtual Account No</td>
                <td>:Table cell</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Pembayaran Berakhir Pada</td>
                <td>:Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h4 className={styles.title__deskripsi}>Payment Instruction</h4>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Transfer Via Atm
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>WAKWAWW</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Transfer via Internet Banking
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>DUAR BAKEKOK KAGET NGA LU</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Transfer via Mobile
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>CANDA KAGET</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderReceived;
