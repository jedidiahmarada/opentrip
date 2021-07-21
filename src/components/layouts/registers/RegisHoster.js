import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hostRegisAsync } from "../../redux/actions/hostRegisAction";

import "../../styles/RegisHoster.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { getBankAsync } from "../../redux/actions/bankActions";

const RegisHoster = () => {
  //untuk onChange
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
  //======================================================

  //untuk fetching dan maping API
  const { getBank } = useSelector((state) => state.bankReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankAsync());
  }, [dispatch]);

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

  const history = useHistory();

  console.log(getBank, "ini bank ke");

  return (
    <>
      <Header />
      <div className="regishosterbackground">
        <div className="regishosterpage">
          <br />
          <div>
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

                <div className="noKtp">
                  <label>No KTP</label>
                  <input
                    className="inputNoKtp"
                    value={identityNoSet}
                    onChange={(e) => setIdentityNoSet(e.target.value)}
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
                    // alt="uploadicon"
                  />
                  <h4 className="h4uploadfotoktp">Upload Foto KTP (JPG,PNG)</h4>
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
                  <img
                    className="uploadicon2"
                    src={sidPicSet}
                    // alt="uploadicon"
                  />
                  <h4 className="h4uploadfotoselfie">
                    Upload Foto Selfie Dengan KTP (JPG,PNG)
                  </h4>
                </div>

                {/* get bank from api */}
                <div className="bankpembayaran">
                  <div className="labelbank">
                    <label>Bank Pembayaran</label>
                  </div>
                  <div class="form-group col-md-4">
                    <select
                      name="wgtmsr"
                      id="wgtmsr"
                      value={bankSet}
                      onChange={(e) => setBankSet(e.target.value)}
                    >
                      {getBank &&
                        getBank.map((type) => (
                          <>
                            <option value={type.bank_name}>
                              {type.bank_name}
                            </option>
                          </>
                        ))}
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
                    // alt="uploadicon"
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
    </>
  );
};
export default RegisHoster;
