import React from 'react';
import styles from '../styles/CreateMyTrip.module.css'
import Map from './Map'
import InterMap from "./InterMap";

const CreateMyTrip = () => {

  return (
    <div className={styles.createMyTripContainer}>
      <h1 className={styles.judulCreateMyTrip}>Create New Trip</h1>
      <div id={styles.kumpContInp} className={styles.kumpContInpRow1}>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Trip Name</p>
          <input className={styles.inputCreateMyTrip}/>
        </div>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Price</p>
          <input className={styles.inputCreateMyTrip}/>
        </div>
      </div>
      <div id={styles.kumpContInp} className={styles.kumpContInpRow2}>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Trip Date 1</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Trip Date 2</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Trip Date 3</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
      </div>
      <div id={styles.kumpContInp} className={styles.kumpContInpRow2}>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Trip Duration</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Quota</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
        <div className={styles.containerInputAn}>
          <p className={styles.inputJdl}>Pickup Spot</p>
          <input className={styles.inputCreateMyTrip2}/>
        </div>
      </div>
      <div id={styles.kumpContInp} className={styles.kumpContInpRow3}>
        <div className={styles.containerMap}>
          <InterMap/>
          {/*<Map/>*/}
        </div>
      </div>
      {/*<div id={styles.kumpContInp} className={styles.kumpContInpRow4}>*/}
      {/*  <div className={styles.containerInputAn}>*/}
      {/*    <p className={styles.inputJdl}>Pickup Spot 1</p>*/}
      {/*    <input className={styles.inputCreateMyTrip}/>*/}
      {/*  </div>*/}
      {/*  <div className={styles.containerInputAn}>*/}
      {/*    <p className={styles.inputJdl}>Pickup Spot 2</p>*/}
      {/*    <input className={styles.inputCreateMyTrip}/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <br/>
      <div className={styles.tripDetil}>
        <div className={styles.tripDetailAtas}>
          <h1 className={styles.judulCreateMyTrip}>Trip Detail</h1>
          <button className={styles.btnAddDay}>Add Day</button>
        </div>
        <div className={styles.tripDetilday1}>
          <div className={styles.aturTripDetail}>
            <div className={styles.kotakWaktu}>
              <p className={styles.waktuHari}>Hari</p>
              <p className={styles.waktuAngka}>1</p>
            </div>
            <div className={styles.formDanButton}>
              <div className={styles.formDetilPerjalanan}>
                <div className={styles.containerInputAn}>
                  <p className={styles.inputJdl}>Time</p>
                  <input className={styles.pukul}/>
                </div>
                <div className={styles.containerInputAn}>
                  <p className={styles.inputJdl}>Trip Date 1</p>
                  <textarea className={styles.ketPerjalanan}/>
                </div>
              </div>
              <button className={styles.btnNextStepO}>Make Order</button>
            </div>
          </div>
          {/*<br/>*/}
          <div className={styles.aturTripDetail}>
            <div className={styles.kotakWaktu}>
              <p className={styles.waktuHari}>Hari</p>
              <p className={styles.waktuAngka}>2</p>
            </div>
            <div className={styles.formDanButton}>
              <div className={styles.formDetilPerjalanan}>
                <div className={styles.containerInputAn}>
                  <p className={styles.inputJdl}>Time</p>
                  <input className={styles.pukul}/>
                </div>
                <div className={styles.containerInputAn}>
                  <p className={styles.inputJdl}>Trip Date 2</p>
                  <textarea className={styles.ketPerjalanan}/>
                </div>
              </div>
              <button className={styles.btnNextStepO}>Make Order</button>
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default CreateMyTrip;