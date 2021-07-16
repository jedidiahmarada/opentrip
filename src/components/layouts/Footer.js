import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../assets/picture/logo.png";
import instagram from "../assets/picture/instagram.png";
import twitter from "../assets/picture/tweet.png";
import youtube from "../assets/picture/youtube.png";

import "../styles/Footer.css";

const Footer = () => {
  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  return (
    <footer>
      <div className="footer-atas">
        <img className="logoFooter" src={logo} onClick={home} />
        <ul className="footer-company">
          <h5 className="h5-company">Company</h5>
          <li className="li-company">About</li>
          <li className="li-company">Press</li>
          <li className="li-company">Careers</li>
          <li className="li-company">Contact</li>
        </ul>
        <ul className="footer-company">
          <h5 className="h5-company">Support</h5>
          <li className="li-company">Help Center</li>
          <li className="li-company">Terms of Service</li>
          <li className="li-company">Legal</li>
          <li className="li-company">Privacy Policy</li>
        </ul>
        <ul className="footer-company">
          <h5 className="h5-company">Kerja Sama</h5>
          <li className="li-company">Daftar Jadi Hoster</li>
          <li className="li-company">Hoster Terdaftar</li>
        </ul>
        <div className="footer-appstore">
          <h5 className="h5-company">Get the App</h5>
          <div className="img-appstore">
            <img
              className="appstore"
              src="https://pbs.twimg.com/media/E3yy9oxVgAIeyRQ?format=png&name=orig"
            />
            <img
              className="appstore"
              src="https://pbs.twimg.com/media/E3yy9ovVgAIaWUz?format=png&name=orig"
            />
          </div>
        </div>
      </div>
      <div className="footer-bawah">
        <p className="footer-copyright">© 2020 OPENTRIP. All rights reserved</p>
        <div className="footer-icon-social">
          <img className="footer-instagram" src={instagram} alt="instagram" />
          <img className="footer-twitter" src={twitter} alt="twitter" />
          <img className="footer-youtube" src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
