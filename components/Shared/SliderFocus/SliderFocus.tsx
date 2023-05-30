import React, { Component } from "react";
import Slider from "react-slick";
import styles from './SliderFocus.module.css'

const SliderFocus = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>

    <Slider {...settings}>
      {/* <div className={styles.div}>
        <h3>1</h3>
      </div>
      <div className={styles.div}>
        <h3>2</h3>
      </div>
      <div className={styles.div}>
        <h3>3</h3>
      </div>
      <div className={styles.div}>
        <h3>4</h3>
      </div>
      <div className={styles.div}>
        <h3>5</h3>
      </div>
      <div className={styles.div}>
        <h3>6</h3>
      </div> */}
      {
        data && data.map((item, i) => (
            <div key={i} className={styles.sliderBOx}>
                <div className={styles.sliderBoxMain}>
                    <img src={item.img} alt="img"/>
                    <div className={styles.pricingSection}>
                        <p>{item.region}</p>
                        <p>{item.price}Tk</p>
                    </div>
                </div>
            </div>
        ))
      }
    </Slider>
  </div>
  )
}

export default SliderFocus;
