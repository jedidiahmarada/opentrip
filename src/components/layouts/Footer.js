import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../img/logo.png";
import GetTheApp from "../layouts/GetTheApp";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <div className="Footer">
              <img className="logo" src={logo} alt="Logo2" />
            </div>
          </MDBCol>
          <MDBCol className="footer" md="6">
            <ul className="company">
              <a href="#!">Company</a>
            </ul>
            <ul className="about">
              <a href="#!">About</a>
            </ul>
            <ul className="press">
              <a href="#!">Press</a>
            </ul>
            <ul className="careers">
              <a href="#!">Careers</a>
            </ul>
            <ul className="contact">
              <a href="#!">Contact</a>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h4 className="download">Get the App</h4>
            <GetTheApp />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div class="copyright">©2020 OPENTRIP. Allrights Reserved</div>
    </MDBFooter>
  );
};

export default Footer;
