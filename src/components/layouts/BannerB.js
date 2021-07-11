import React from "react";
import iphonemockup1 from "../assets/picture/iphone1mockup.png";
import iphonemockup2 from "../assets/picture/iphone2mockup.png";
import "../styles/bannerb.css";

const BannerB = () => {
  return (
    <div className="bannerb">
      <div className="headerB-kiri">
        <h1 className="descriptionh6">Download App</h1>
        <p className="descriptionh4">
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procastinating. Stay on track and complete
          on time!
        </p>
        <h3 className="getApp">Get The App</h3>
        <div className="logo-appstore-headerb">
          <img
            className="logoappstorebannerb"
            src="https://pbs.twimg.com/media/E3yy9oxVgAIeyRQ?format=png&name=orig"
          />
          <img
            className="logoappstorebannerb"
            src="https://pbs.twimg.com/media/E3yy9ovVgAIaWUz?format=png&name=orig"
          />
        </div>
      </div>
      <img className="iphonemockup1" src={iphonemockup1} alt="iphonemockup1" />
      <img className="iphonemockup2" src={iphonemockup2} alt="iphonemockup2" />
    </div>
  );
};
export default BannerB;
