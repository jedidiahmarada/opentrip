
import React from 'react';
// import styles from "../styles/TabsDDetail.css";
import DPerjalanan from "./DPerjalanan";

const TabsDDetail = () => {
  return (
    <div className='tabsD'>
      <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            Detail Perjalanan
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-syarat-tab" data-bs-toggle="pill" data-bs-target="#pills-syarat"
                  type="button" role="tab" aria-controls="pills-syarat" aria-selected="false">
            Syarat & Ketentuan
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-galeri-tab" data-bs-toggle="pill" data-bs-target="#pills-galeri"
                  type="button" role="tab" aria-controls="pills-galeri" aria-selected="false">
            Galeri
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
             aria-labelledby="pills-home-tab">
          <DPerjalanan/>
        </div>
        <div className="tab-pane fade" id="pills-syarat" role="tabpanel" aria-labelledby="pills-profile-tab">

        </div>
        <div className="tab-pane fade" id="pills-galeri" role="tabpanel" aria-labelledby="pills-contact-tab">

        </div>
      </div>
    </div>
  );
};

export default TabsDDetail;

