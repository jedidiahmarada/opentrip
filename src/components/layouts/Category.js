import React, { useEffect } from "react";

import styles from "../styles/category.module.css";
import { getCategoryAsync } from "../redux/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";

//Components
import PopularDestinationList from "./category/PopularDestinationList";
import VitaminSeaList from "./category/VitaminSeaList";
import NaikGunungList from "./category/NaikGunungList";

const Category = () => {
  // const naikGunung = useSelector(
  //   (state) => state.destinationsReducer.naikGunung
  // );
  const loading = useSelector((state) => state.categoryReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className="container main-container">
        {loading ? <div>Loading...</div> : <PopularDestinationList />}

        <br />
        {loading ? <div>Loading...</div> : <VitaminSeaList />}

        <br />
        {loading ? <div>Loading...</div> : <NaikGunungList />}
      </div>
    </div>
  );
};
export default Category;
