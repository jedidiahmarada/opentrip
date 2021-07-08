import React, { useEffect } from "react";

import styles from "../styles/category.module.css";
import { mainResponsive } from "../../mainResponsive";
import destinationsActions from "../redux/actions/destinationsActions";
import { useDispatch, useSelector } from "react-redux";

//Components
import PopularDestinationList from "./category/PopularDestinationList";
import VitaminSeaList from "./category/VitaminSeaList";
import NaikGunungList from "./category/NaikGunungList";
let imgURL = "https://image.tmdb.org/t/p/original";

const Category = () => {
  const naikGunung = useSelector(
    (state) => state.destinationsReducer.naikGunung
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getNaikGunung());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {" "}
      <div className="container main-container">
        <PopularDestinationList />
        <br />
        <VitaminSeaList />
        <br />
        <NaikGunungList />
      </div>
    </div>
  );
};
export default Category;
