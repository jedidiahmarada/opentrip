import React, { useState, useEffect } from "react";

import uploadicon from "../../assets/picture/uploadicon.png";
import "../../styles/RegisHoster.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const RegisHoster = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [identitiyNo, setIdentityNo] = useState("");
  const [identitypic, setIdentitypic] = useState("");
  const [sidPic, setSidPic] = useState("");
  const [bank, setBank] = useState("");
  const [accountnum, setAccountnum] = useState("");
  const [bookAccountpic, setBookAccountPic] = useState("");

  const [previewIdPic, setPreviewIdPic] = useState("");
  const [previewSidPic, setPreviewSidPic] = useState("");
  const [previewBaPic, setPreviewBaPic] = useState("");

  //UPLOAD KTP
  //======================
  useEffect(() => {
    if (!identitypic) {
      setPreviewIdPic(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(identitypic);
    setPreviewIdPic(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [identitypic]);

  const onSelectFileId = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setIdentitypic(undefined);
      return;
    }
    setIdentitypic(e.target.files[0]);
  };
  //======================

  //UPLOAD FOTO SELFIE
  //======================
  useEffect(() => {
    if (!sidPic) {
      setPreviewSidPic(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(sidPic);
    setPreviewSidPic(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [sidPic]);

  const onSelectFileSid = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSidPic(undefined);
      return;
    }
    setSidPic(e.target.files[0]);
  };

  //UPLOAD BOOK ACCOUNT
  //======================
  useEffect(() => {
    if (!bookAccountpic) {
      setPreviewBaPic(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(bookAccountpic);
    setPreviewBaPic(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [bookAccountpic]);

  const onSelectFileBa = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setBookAccountPic(undefined);
      return;
    }
    setBookAccountPic(e.target.files[0]);
  };

  const history = useHistory();

  const phOrder = () => {
    history.push("/phorder");
  };
  return (
    <>
      <Header />
      <div class="regishosterbackground">
        <div class="regishosterpage">
          <br />
          <div class="rectangle">
            <br />

            <div>
              <h4 className="h4">Register as Hoster</h4>
              <div className="username">
                <label>User Name</label>
                <input type="text" className="usernameinput" />
              </div>

              <div className="password">
                <label>Password</label>
                <input type="password" className="passwordinput" />
              </div>

              <div className="email">
                <label>Email</label>
                <input type="email" className="emailinput" />
              </div>

              <div className="NomorHandphone">
                <label>Nomor Handphone</label>
                <input type="number" className="NHinput" />
              </div>

              <div className="alamat">
                <label>Alamat</label>
                <input type="text" className="alamatinput" />
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
                  src={previewIdPic}
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
                <img
                  className="uploadicon2"
                  src={previewSidPic}
                  alt="uploadicon"
                />
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
                <input type="text" className="NoRekinput" />
              </div>

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
                  src={previewBaPic}
                  alt="uploadicon"
                />
                <h4 className="h4fotobukutabungan">
                  Upload Foto Buku Tabungan (JPG,PNG)
                </h4>
                {/* <button type="submit" className="browsefileuploadKTP">
                  Browse File
                </button> */}
              </div>

              <button
                type="submit"
                className="submitregister"
                onClick={phOrder}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RegisHoster;
