import React from "react";
import logoplaystorebannerb from "../assets/picture/playstore.png";
import logoappstorebannerb from "../assets/picture/applestore.png";
import iphonemockup1 from "../assets/picture/iphone1mockup.png";
import iphonemockup2 from "../assets/picture/iphone2mockup.png";
import "../styles/bannerb.css";

const BannerB = () => {
  return (
    <div className="bannerb">
      <h6 className="descriptionh6">Download App</h6>
      <p className="descriptionh4">
        Download the app to manage your projects, keep track of the progress and
        complete tasks without procastinating. Stay on track and complete on
        time!
      </p>
      <ul className="gettheappbanner">
        <p>Get The App</p>
      </ul>
      <img
        className="logoplaystorebannerb"
        src={logoplaystorebannerb}
        alt="logoplaystorebannerb"
      />
      <img
        className="logoappstorebannerb"
        src={logoappstorebannerb}
        alt="logoappstorebannerb"
      />
      <img className="iphonemockup1" src={iphonemockup1} alt="iphonemockup1" />
      <img className="iphonemockup2" src={iphonemockup2} alt="iphonemockup2" />
    </div>
  );
};
export default BannerB;
