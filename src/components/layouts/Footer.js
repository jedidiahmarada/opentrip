import React from "react";
import logo from "../assets/picture/logo.png";
import logoplaystore from "../assets/picture/playstore.png";
import logoappstore from "../assets/picture/applestore.png";
import instagram from "../assets/picture/instagram.png";
import twitter from "../assets/picture/tweet.png";
import youtube from "../assets/picture/youtube.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <img className="logo" src={logo} alt="Logo2" />
      </div>

      <ul className="company">
        <p>Company</p>
      </ul>
      <ul className="about">
        <p>About</p>
      </ul>
      <ul className="press">
        <p>Press</p>
      </ul>
      <ul className="careers">
        <p>Careers</p>
      </ul>
      <ul className="contact">
        <p>Contact</p>
      </ul>
      <ul className="support">
        <p>Support</p>
      </ul>
      <ul className="helpcenter">
        <p>Help Center</p>
      </ul>
      <ul className="toc">
        <p>Term of service</p>
      </ul>
      <ul className="legal">
        <p>Legal</p>
      </ul>
      <ul className="privacypolicy">
        <p>Privacy Policy</p>
      </ul>
      <ul className="kerjasama">
        <p>Kerja Sama</p>
      </ul>
      <ul className="daftarjadihoster">
        <p>Daftar Jadi Hoster</p>
      </ul>
      <ul className="hosterterdaftar">
        <p>Hoster Terdaftar</p>
      </ul>
      <ul className="gettheapp">
        <p>Get The App</p>
      </ul>
      <img className="logoplaystore" src={logoplaystore} alt="logoplaystore" />
      <img className="logoappstore" src={logoappstore} alt="logoapplestore" />
      <div className="copyright">©2020 OPENTRIP. All rights Reserved</div>
      <img className="instagram" src={instagram} alt="instagram" />
      <img className="twitter" src={twitter} alt="twitter" />
      <img className="youtube" src={youtube} alt="youtube" />
    </div>
  );
};

export default Footer;
