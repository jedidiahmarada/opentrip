import React from "react";
import uploadicon from "../../assets/picture/uploadicon.png";
import "../../styles/RegisHoster.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const RegisHoster = () => {
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

              <div className="uploadfotoKTP">
                <label>Upload Foto KTP</label>
                <input
                  // type="image"
                  className="uploadfotoKTPinput"
                  alt="uploadfotoKTPinput"
                />
                <img className="uploadicon" src={uploadicon} alt="uploadicon" />
                <h4 className="h4uploadfotoktp">Upload Foto KTP (JPG,PNG)</h4>
                <button type="submit" className="browsefileuploadKTP">
                  Browse File
                </button>
              </div>

              <div className="uploadfotoselfie">
                <label>Upload Foto Selfie Dengan KTP</label>
                <input
                  // type="image"
                  className="uploadfotoselfieinput"
                  alt="uploadfotoselfieinput"
                />
                <img
                  className="uploadicon2"
                  src={uploadicon}
                  alt="uploadicon"
                />
                <h4 className="h4uploadfotoselfie">
                  Upload Foto Selfie Dengan KTP (JPG,PNG)
                </h4>
                <button type="submit" className="browsefileuploadselfie">
                  Browse File
                </button>
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
                  // type="image"
                  className="fotobukutabunganinput"
                  alt="fotobukutabunganinput"
                />
                <img
                  className="uploadicon3"
                  src={uploadicon}
                  alt="uploadicon"
                />
                <h4 className="h4fotobukutabungan">
                  Upload Foto Buku Tabungan (JPG,PNG)
                </h4>
                <button type="submit" className="browsefileuploadKTP">
                  Browse File
                </button>
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
