import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationItem from "./DestinationItem";
import styles from "../../styles/destinationCard.module.css";

import { getTripAsync } from "../../redux/actions/tripActions";

const DestinationCard = (props) => {
  //FILTER
  const filteredCategory = useSelector((state) => {
    let category = [];
    state.categoryReducer.getCategory.forEach((element) => {
      category = [...category, ...element.Trips];
    });
    console.log(category, "category");
    const filtered = category.filter((element) =>
      state.categoryReducer.checkedCategory.includes(element.category_id)
    );
    console.log(filtered, "filtered");
    return filtered.sort((a, b) => a.id - b.id);
  });
  console.log(filteredCategory, "filter");
  //================================================

  //untuk fetching dan maping API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTripAsync());
  }, [dispatch]);

  return (
    <div className={styles.div__card}>
      {!filteredCategory.length && (
        <div className={styles.div__pilihkategori}>
          Silahkan Pilih Tema Perjalanan
        </div>
      )}
      {filteredCategory &&
        filteredCategory.map((destination) => {
          console.log(destination);
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })}
    </div>
  );
};
export default DestinationCard;
