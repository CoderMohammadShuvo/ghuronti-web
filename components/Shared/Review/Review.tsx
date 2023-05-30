import React, { Component } from "react";
import Slider from "react-slick";
import styles from './Review.module.css'
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className={styles.reviewMain}>
        <div>
        <Slider {...settings}>
          <div className={styles.reviewFirstSlide}>
            <h3>Your thoughtfulness and support of Ghuronti is very much appreciated. <br /> You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.</h3>
          </div>
          <div className={styles.reviewFirstSlide}>
            <h3>Your thoughtfulness and support of Ghuronti is very much appreciated. <br /> You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Review