import React from "react";
import "../components/TabSyaratDanKetentuan.css";

function TabSyaratDanKetentuan() {
  return (
    <div>
      <p className="h6SK1">Detail Perjalanan</p>
      <p className="h6SK2">Syarat & Ketentuan</p>
      <p className="h6SK3">Galeri</p>
      <hr className="garis1" />

      <h2 className="h2SK1"> Harga Termasuk :</h2>
      <ul class="first">
        <li>Transport PP (Toll, Parkir, BBM)</li>
        <li>Penginapan 1 malam di homestay</li>
        <li>Tiket Masuk dan Retribusi Desa Tempat wisata sesuai Program</li>
        <li>Tour Leader dari Jakarta</li>
        <li>Tour Leader dari Jakarta</li>
        <li>Lokal Guide</li>
        <li className="listSK1">
          Jeep di Bromo (Pananjakan 1, Lautan Pasir, Savana, Pasir Berbisik)
        </li>
        <li className="listSK1">Sticker Tanda Peserta di Bromo</li>
        <li>Tanda pengenal transport di Bromo</li>
      </ul>

      <h2 className="h2SK2"> Harga Tidak Termasuk :</h2>
      <ul class="second">
        <li class="second">
          Makan dan Atraksi wisata diluar program tercantum
        </li>
        <li class="second">Penambahan dan Atraksi wisata diluar program</li>
        <li class="second">Pengeluaran keperluan pribadi selama perjalanan</li>
        <li class="second">Tipping Guide dan Driver</li>
      </ul>
    </div>
  );
}
export default TabSyaratDanKetentuan;
