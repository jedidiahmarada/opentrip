import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // responsive: { props: { responsiveConfig } },
    slidesToScroll: 5,
    // accessibility: true,
    // arrows: true,
    centerMode: true,
    draggable: true,
    adaptiveHeight: true,
    useTransform: true,
    cssEase: "linier",
  };
  return <Slider {...settings}>{props.children}</Slider>;
};
export default DestinationSlider;
