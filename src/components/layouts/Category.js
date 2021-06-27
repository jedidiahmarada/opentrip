import React, { useEffect } from "react";
import styles from "../styles/category.module.css";

import { Link } from "react-router-dom";
import { mainResponsive } from "../../mainResponsive";
import moviesActions from "../redux/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";

//Components
import PopularMovieList from "../layouts/PopularMoviesList";
import TopMoviesList from "../layouts/TopMoviesList";
import UpcomingMoviesList from "../layouts/UpcomingMoviesList";
let imgURL = "https://image.tmdb.org/t/p/original";

const Category = () => {
  const upcomingMovies = useSelector(
    (state) => state.moviesReducer.upcomingMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesActions.getUpcomingMovies());
  }, [dispatch]);
  return (
    <div>
      {" "}
      <div className="container main-container">
        <PopularMovieList />
        <br />
        <TopMoviesList />
        <br />
        <UpcomingMoviesList upcomingMovies={upcomingMovies} />
      </div>
    </div>
  );
};
export default Category;
