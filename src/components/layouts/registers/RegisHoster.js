import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hostRegisAsync } from "../../redux/actions/hostRegisAction";

import uploadicon from "../../assets/picture/uploadicon.png";
import "../../styles/RegisHoster.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const RegisHoster = () => {
  const [usernameSet, setUsernameSet] = useState("");
  const [emailSet, setEmailSet] = useState("");
  const [password, setPassword] = useState("");
  const [phoneSet, setPhoneSet] = useState("");
  const [addressSet, setAddressSet] = useState("");
  const [identityNoSet, setIdentityNoSet] = useState("");
  const [identitypicSet, setIdentitypicSet] = useState("");
  const [sidPicSet, setSidPicSet] = useState("");
  const [bankSet, setBankSet] = useState("");
  const [accountnumSet, setAccountnumSet] = useState("");
  const [bookAccountpicSet, setBookAccountPicSet] = useState("");

  //setting error message
  //======================================================
  const {
    username,
    email,
    phone,
    address,
    identity_no,
    identity_pic,
    selfie_identity_pic,
    bank,
    account_number,
    book_account_pic,
    loading,
    error,
    errorMessage,
  } = useSelector((state) => state.travRegisReducer);
  console.log(emailSet, "email");
  console.log(usernameSet, "username");
  console.log(password, "ini password");
  console.log(phoneSet, "ini phone");
  console.log(addressSet, "ini address");
  console.log(identityNoSet, "identity_no");
  console.log(identitypicSet, "identity_pic");
  console.log(sidPicSet, "SID PIC");
  console.log(bankSet, "bank");
  console.log(accountnumSet, "account number");
  console.log(bookAccountpicSet, "book account");
  //======================================================

  const dispatch = useDispatch();
  const handleClick = () => {
    // e.preventDefault();
    dispatch(
      hostRegisAsync(
        usernameSet,
        emailSet,
        password,
        phoneSet,
        addressSet,
        identityNoSet,
        identitypicSet,
        sidPicSet,
        bankSet,
        accountnumSet,
        bookAccountpicSet
      )
    );
  };

  //UPLOAD KTP
  //======================
  const onSelectFileId = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setIdentitypicSet(URL.createObjectURL(img));
    }
    console.log(e.target.files, "ini e");
  };
  //======================

  //UPLOAD FOTO SELFIE
  //======================
  const onSelectFileSid = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setSidPicSet(URL.createObjectURL(img));
    }
    console.log(e.target.files, "ini e");
  };

  //UPLOAD BOOK ACCOUNT
  //======================
  const onSelectFileBa = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setBookAccountPicSet(URL.createObjectURL(img));
    }
    console.log(e.target.files, "ini e");
  };
  console.log(identitypicSet, "set bookaccut");
  console.log(sidPicSet, "set bookaccut");
  console.log(bookAccountpicSet, "set bookaccut");

  const history = useHistory();

  const phOrder = () => {
    history.push("/phorder");
  };
  return (
    <div className="regishosterbackground">
      <div className="regishosterpage">
        <br />
        <div className="rectangle">
          <br />
          <div class="rectangle">
            <br />

            <div>
              <h4 className="h4">Register as Hoster</h4>
              <div className="username">
                <label>User Name</label>
                <input
                  className="usernameinput"
                  value={usernameSet}
                  onChange={(e) => setUsernameSet(e.target.value)}
                />
              </div>

              <div className="password">
                <label>Password</label>
                <input
                  type="password"
                  className="passwordinput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  className="emailinput"
                  value={emailSet}
                  onChange={(e) => setEmailSet(e.target.value)}
                />
              </div>

              <div className="NomorHandphone">
                <label>Nomor Handphone</label>
                <input
                  type="number"
                  className="NHinput"
                  value={phoneSet}
                  onChange={(e) => setPhoneSet(e.target.value)}
                />
              </div>

              <div className="alamat">
                <label>Alamat</label>
                <input
                  type="text"
                  className="alamatinput"
                  value={addressSet}
                  onChange={(e) => setAddressSet(e.target.value)}
                />
              </div>

              {/* UPLOAD KTP */}
              <div className="uploadfotoKTP">
                <label>Upload Foto KTP</label>
                <input
                  type="file"
                  className="uploadfotoKTPinput"
                  alt="uploadfotoKTPinput"
                  accept="image/*"
                  onChange={onSelectFileId}
                />
                <img
                  className="uploadicon"
                  src={identitypicSet}
                  alt="uploadicon"
                />
                <h4 className="h4uploadfotoktp">Upload Foto KTP (JPG,PNG)</h4>
                {/* <button type="submit" className="browsefileuploadKTP">
                  Browse File
                </button> */}
              </div>

              {/* UPLOAD FOTO SELFIE */}
              <div className="uploadfotoselfie">
                <label>Upload Foto Selfie Dengan KTP</label>
                <input
                  type="file"
                  className="uploadfotoselfieinput"
                  alt="uploadfotoselfieinput"
                  accept="image/*"
                  onChange={onSelectFileSid}
                />
                <img className="uploadicon2" src={sidPicSet} alt="uploadicon" />
                <h4 className="h4uploadfotoselfie">
                  Upload Foto Selfie Dengan KTP (JPG,PNG)
                </h4>
                {/* <button type="submit" className="browsefileuploadselfie">
                  Browse File
                </button> */}
              </div>

              <div className="bankpembayaran">
                <div className="labelbank">
                  <label>Bank Pembayaran</label>
                </div>
                <div class="form-group col-md-4">
                  <select name="wgtmsr" id="wgtmsr">
                    <option value="btn">BTN</option>
                    <option value="btpn">BTPN</option>
                    <option value="btnsyah">BTN Syariah</option>
                    <option value="btpnsyah">BTPN Syariah</option>
                  </select>
                </div>
              </div>

              <div className="NomorRekening">
                <label>Nomor Rekening</label>
                <input
                  type="text"
                  className="NoRekinput"
                  value={accountnumSet}
                  onChange={(e) => setAccountnumSet(e.target.value)}
                />
              </div>

              {/* UPLOAD FOTO BUKU REKENING */}
              <div className="fotobukutabungan">
                <label>Foto Buku Tabungan</label>
                <input
                  type="file"
                  className="fotobukutabunganinput"
                  alt="fotobukutabunganinput"
                  accept="image/*"
                  onChange={onSelectFileBa}
                />
                <img
                  className="uploadicon3"
                  src={bookAccountpicSet}
                  alt="uploadicon"
                />
                <h4 className="h4fotobukutabungan">
                  Upload Foto Buku Tabungan (JPG,PNG)
                </h4>
                {/* <button type="submit" className="browsefileuploadKTP">
                  Browse File
                </button> */}
              </div>
              {loading && <div>loading...</div>}
              {error && <div>{errorMessage}</div>}
              {!loading && (
                <button className="submitregister" onClick={handleClick}>
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default RegisHoster;
