import React from "react";
import logo1 from "../../assets/picture/logo.png";
import notificon from "../../assets/picture/notificon.png";
import photoprofile from "../../assets/picture/photoprofile.png";
import photogaleri1 from "../../assets/picture/photogaleri.png";
import photogaleri2 from "../../assets/picture/photogaleri.png";
import photogaleri3 from "../../assets/picture/photogaleri.png";
import photogaleri4 from "../../assets/picture/photogaleri.png";
import sorticon1 from "../../assets/picture/sorticon1.png";
import filtericon1 from "../../assets/picture/filtericon1.png";
import "../../styles/PHMyTripTable.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PHMyTripTable() {
  return (
    <div className="tableboxbackgorund">
      <nav class="navbar navbar-light bg-light">
        <img className="logo1" src={logo1} alt="logo1" />
        <img className="notificon" src={notificon} alt="notificon" />
        <hr className="garisvertical" width="1" size="40" />
        <p className="namajones" marginRight="300px">
          Jones Ferdinand
        </p>
        <img
          src={photoprofile}
          class="rounded-circle"
          alt="photoprofile "
          width="42"
          height="42"
        ></img>
      </nav>

      <div className="tableboxpage">
        <p className="mytrip">My Trip</p>
        <button class="button">New Trip + </button>
        <img className="sorticon1" src={sorticon1} alt="sorticon1" />
        <p className="sort1">Sort</p>
        <img className="filtericon1" src={filtericon1} alt="filtericon1" />
        <p className="filter1">Filter</p>

        <table class="table ">
          <thead>
            <tr className="tablerow1">
              <th className="tripdetail" scope="col">
                Trip Details
              </th>
              <th className="quota" scope="col">
                Quota
              </th>
              <th className="datetrip" scope="col">
                Date Trip
              </th>
              <th className="price" scope="col">
                Price
              </th>
              <th className="status" scope="col">
                Status
              </th>
              <th className="action" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <img
                src={photogaleri1}
                class="rounded-circle"
                className="photogaleri1"
                alt="photogaleri1 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="bromotrip">Bromo Trip</p>
              <br />
              <p className="p1">updated 1day ago</p>
              <p className="besarquota">5/10</p>
              <p className="tanggal">May 26,2019</p>
              <p className="p2">06.30PM</p>
              <p className="biaya">Rp 1.200.000</p>
              <button class="button1"> AVAILABLE</button>
              <button class="button2"> Edit</button>
              <button class="button3"> Delete</button>
            </tr>
            <hr className="garis1" />

            <tr>
              <img
                src={photogaleri2}
                class="rounded-circle"
                className="photogaleri2"
                alt="photogaleri2 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="semerutrip">Semeru Trip</p>
              <br />
              <p className="p3">updated 1day ago</p>
              <p className="besarquota2">10/10</p>
              <p className="tanggal2">May 26,2019</p>
              <p className="p4">08.00AM</p>
              <p className="biaya2">Rp 3.000.000</p>
              <button class="button4"> FULL</button>
              <button class="button5"> Edit</button>
              <button class="button6"> Delete</button>
            </tr>
            <hr className="garis2" />

            <tr>
              <img
                src={photogaleri3}
                class="rounded-circle"
                className="photogaleri3"
                alt="photogaleri3 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="gunungsumbing">Gunung Sumbing</p>
              <br />
              <p className="p5">updated 1day ago</p>
              <p className="besarquota3">3/10</p>
              <p className="tanggal3">May 26,2019</p>
              <p className="p6">07.30PM</p>
              <p className="biaya3">Rp 2.500.000</p>
              <button class="button7"> AVAILABLE</button>
              <button class="button8"> Edit</button>
              <button class="button9"> Delete</button>
            </tr>
            <hr className="garis3" />

            <tr>
              <img
                src={photogaleri4}
                class="rounded-circle"
                className="photogaleri4"
                alt="photogaleri4"
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="bukitpergasingan">Bukit Pergasingan</p>
              <br />
              <p className="p7">updated 2day ago</p>
              <p className="besarquota4">5/10</p>
              <p className="tanggal4">May 25,2019</p>
              <p className="p8">04.00PM</p>
              <p className="biaya4">Rp 5.000.000</p>
              <button class="button10"> AVAILABLE</button>
              <button class="button11"> Edit</button>
              <button class="button12"> Delete</button>
            </tr>
            <hr className="garis4" />
          </tbody>
        </table>
        <p className="p9">Rows per page</p>
        <select class="selectpicker">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PHMyTripTable;
