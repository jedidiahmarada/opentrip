import React from "react";
import "../../styles/TabSdk.css";

const Sdk = () => {
  return (
    <div clasName="sdk">
      <hr className="garis1"></hr>
      <div className={"penampungSDK"}>
        <h2 className="h2SK1"> Harga Termasuk :</h2>
        <ul className="ul-first">
          <li className="li-sdk">Transport PP (Toll, Parkir, BBM)</li>
          <li className="li-sdk">Penginapan 1 malam di homestay</li>
          <li className="li-sdk">
            Tiket Masuk dan Retribusi Desa Tempat wisata sesuai Program
          </li>
          <li className="li-sdk">Tour Leader dari Jakarta</li>
          <li className="li-sdk">Lokal Guide</li>
          <li className="li-sdk">
            Jeep di Bromo (Pananjakan 1, Lautan Pasir, Savana, Pasir Berbisik)
          </li>
          <li className="li-sdk">Sticker Tanda Peserta di Bromo</li>
          <li className="li-sdk">Tanda pengenal transport di Bromo</li>
        </ul>

        <h2 className="h2SK2"> Harga Tidak Termasuk :</h2>
        <ul className="ul-second">
          <li className="li-sdk-second">
            Makan dan Atraksi wisata diluar program tercantum
          </li>
          <li className="li-sdk-second">
            Penambahan dan Atraksi wisata diluar program
          </li>
          <li className="li-sdk-second">
            Pengeluaran keperluan pribadi selama perjalanan
          </li>
          <li className="li-sdk-second">Tipping Guide dan Driver</li>
        </ul>
      </div>
    </div>
  );
};

export default Sdk;
