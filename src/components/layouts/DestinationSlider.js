import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    // responsive: { props: { responsiveConfig } },
    slidesToScroll: 3,
    accessibility: true,
    arrows: true,
    centerMode: true,
    draggable: true,
    adaptiveHeight: true,
    useTransform: true,
  };
  return <Slider {...settings}>{props.children}</Slider>;
};
export default DestinationSlider;
