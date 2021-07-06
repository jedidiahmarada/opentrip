import React from "react";
import logo1 from "../../assets/picture/logo.png";
import notificon from "../../assets/picture/notificon.png";
import photoprofile from "../../assets/picture/photoprofile.png";
import photogaleri5 from "../../assets/picture/photoprofile.png";
import photogaleri6 from "../../assets/picture/photoprofile.png";
import photogaleri7 from "../../assets/picture/photoprofile.png";
import photogaleri8 from "../../assets/picture/photoprofile.png";
import sorticon1 from "../../assets/picture/sorticon1.png";
import filtericon1 from "../../assets/picture/filtericon1.png";
import "../../styles/PHMyTripOrder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HosterNav from "./HosterNav";

function PHMyTripOrder() {
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
      <HosterNav />
      <div className="tableboxpage">
        <p className="order">Order</p>

        <img className="sorticon1" src={sorticon1} alt="sorticon1" />
        <p className="sort1">Sort</p>
        <img className="filtericon1" src={filtericon1} alt="filtericon1" />
        <p className="filter1">Filter</p>

        <label class="dropdown">
          <div class="dd-button">Action</div>

          <input type="checkbox" class="dd-input" id="test" />

          <ul class="dd-menu">
            <li>Bulk Action</li>
            <li>Set to Completed</li>
            <li>Set to Cancel</li>
          </ul>
        </label>

        <button class="button13"> Apply</button>

        <nav class="navbar navbar-light ">
          <div class="container-fluid">
            <form class="d-flex">
              <input
                class="form-control5 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>

        <table class="table ">
          <thead>
            <tr className="tablerow2">
              <th className="ordercode" scope="col">
                Order Code
              </th>
              <th className="tripdetail2" scope="col">
                Trip
              </th>

              <th className="orderdate" scope="col">
                Order Date
              </th>
              <th className="status" scope="col">
                Status
              </th>
              <th className="price" scope="col">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div class="form-check1">
                <input
                  class="form-check-input1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  #898 Ahmad Subekti
                </label>
              </div>
              <img
                src={photogaleri5}
                class="rounded-circle"
                className="photogaleri5"
                alt="photogaleri5 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="bromotrip2">Bromo Trip</p>
              <br />
              <p className="tanggal5">May 26,2019</p>
              <p className="p9">06.30PM</p>
              <p className="biaya5">Rp 1.200.000</p>
              <button class="button14"> COMPLETED</button>
            </tr>
            <hr className="garis5" />

            <tr>
              <div class="form-check2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  #234 Carrisa Melinda
                </label>
              </div>
              <img
                src={photogaleri6}
                class="rounded-circle"
                className="photogaleri6"
                alt="photogaleri6 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="semeru2">Semeru Open Trip</p>
              <br />
              <p className="tanggal6">May 26,2019</p>
              <p className="p10">08.00AM</p>
              <p className="biaya6">Rp 3.000.000</p>
              <button class="button15"> CANCELED</button>
            </tr>
            <hr className="garis6" />

            <tr>
              <div class="form-check3">
                <input
                  class="form-check-input1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  #4354 Jane Doe
                </label>
              </div>
              <img
                src={photogaleri7}
                class="rounded-circle"
                className="photogaleri7"
                alt="photogaleri7 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="gunungsumbing2">Gunung Sumbing</p>
              <br />
              <p className="tanggal7">May 26,2019</p>
              <p className="p11">07.30PM</p>
              <p className="biaya7">Rp 2.500.000</p>
              <button class="button16"> PENDING PAYMENT</button>
            </tr>
            <hr className="garis7" />

            <tr>
              <div class="form-check4">
                <input
                  class="form-check-input1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  #54584 Kiki Mela
                </label>
              </div>
              <img
                src={photogaleri8}
                class="rounded-circle"
                className="photogaleri8"
                alt="photogaleri8 "
                width="60"
                height="60"
                position="absolute"
              ></img>
              <p className="bukitpergasingan2">Bukit Pergasingan</p>
              <br />
              <p className="tanggal8">May 25,2019</p>
              <p className="p12">04.00PM</p>
              <p className="biaya8">Rp 5.000.000</p>
              <button class="button17"> COMPLETED</button>
            </tr>
            <hr className="garis8" />
          </tbody>
        </table>

        <p className="p13">Rows per page</p>
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

export default PHMyTripOrder;
