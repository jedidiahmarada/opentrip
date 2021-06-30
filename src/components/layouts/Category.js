import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { mainResponsive } from "../../mainResponsive";
import destinationsActions from "../redux/actions/destinationsActions";
import { useDispatch, useSelector } from "react-redux";

//Components
import PopularDestinationList from "./PopularDestinationList";
import VitaminSeaList from "./VitaminSeaList";
// import NaikGunungList from "./NaikGunungList";
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
    <div>
      {" "}
      <div className="container main-container">
        <PopularDestinationList />
        <br />
        <VitaminSeaList />
        <br />
        {/* <NaikGunungList /> */}
      </div>
    </div>
  );
};
export default Category;
