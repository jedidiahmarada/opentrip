import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/destinationCarousel.module.css";

const DestinationCarousel = (props) => {
  return (
    <Carousel
      showDots={false}
      swipeable
      responsive={props.responsiveConfig}
      additionalTransfrom={0}
      arrows={true}
      autoPlaySpeed={3000}
      centerMode={true}
      className={styles.card__carousell}
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      items={4}
      // slidesToShow={1}
      slidesToSlide={1}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      itemClass="carousel-item-padding-100-px"
    >
      {props.children}
    </Carousel>
  );
};

export default DestinationCarousel;
