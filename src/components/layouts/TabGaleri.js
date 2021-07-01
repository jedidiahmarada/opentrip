import React from "react";
import "../components/TabGaleri.css";
import photogaleri1 from "../img/photogaleri.png";
import photogaleri2 from "../img/photogaleri.png";
import photogaleri3 from "../img/photogaleri.png";
import photogaleri4 from "../img/photogaleri.png";
import photogaleri5 from "../img/photogaleri.png";
import photogaleri6 from "../img/photogaleri.png";
import photogaleri7 from "../img/photogaleri.png";
import photogaleri8 from "../img/photogaleri.png";
import photogaleri9 from "../img/photogaleri.png";

function TabGaleri() {
  return (
    <div>
      <p className="h6SK4">Detail Perjalanan</p>
      <p className="h6SK5">Syarat & Ketentuan</p>
      <p className="h6SK6">Galeri</p>
      <hr className="garis2" />

      <div className="photoimage">
        <img classname="photogaleri1" src={photogaleri1} alt="photogaleri" />
        <img classname="photogaleri2" src={photogaleri2} alt="photogaleri" />
        <img classname="photogaleri3" src={photogaleri3} alt="photogaleri" />
        <img classname="photogaleri4" src={photogaleri4} alt="photogaleri" />
        <img classname="photogaleri5" src={photogaleri5} alt="photogaleri" />
        <img classname="photogaleri5" src={photogaleri6} alt="photogaleri" />
        <img classname="photogaleri7" src={photogaleri7} alt="photogaleri" />
        <img classname="photogaleri8" src={photogaleri8} alt="photogaleri" />
        <img classname="photogaleri9" src={photogaleri9} alt="photogaleri" />
      </div>
    </div>
  );
}
export default TabGaleri;
