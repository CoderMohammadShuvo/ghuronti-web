import React from 'react'
import styles from './TrendingSlider.module.css'

import Slider from "react-slick";

const TrendingSlider = () => {
    const data = [{
        name:'Economy Package',
        facility: ['3* Hotel In Mecca.',' 3* Hotel In Madinah.','Hotel Distance, 300 – 400 Meter.', '5-6  Persons In Every Room.', 'Saudi / Biman Airlines Ticket.', 'Travel By Ac Bus.'],
        price: '7,70,000',
        duration:40, 
        image:'/images/hajjPackageOne.png'
    },
    {
        name:'Economy Package',
        facility: ['3* Hotel In Mecca.',' 3* Hotel In Madinah.','Hotel Distance, 300 – 400 Meter.', '5-6  Persons In Every Room.', 'Saudi / Biman Airlines Ticket.', 'Travel By Ac Bus.'],
        price: '7,70,000',
        duration:40, 
        image:'/images/hajjPackageOne.png'
    },
    {
        name:'VIP Package',
        facility: ['5* Hotel In Mecca.','3* Hotel In Madinah.','Hotel Distance 0 – 50 Meter.', 'Single Person', 'Saudi / Biman Airlines Ticket.', 'Travel By Ac Bus.'],
        price: '13,18,000',
        duration:18,
        image:'/images/hajjPackageTwo.png' 
    },
    {
        name:'Standard Package',
        facility: ['5/4* Hotel In Mecca.',' 4/3* Hotel In Madinah.','Hotel Distance 100 – 200 Meter.', '4-5 Persons In Every Room.', 'Saudi / Biman Airlines Ticket.', 'Travel By Ac Bus.'],
        price:'8,80,000',
        duration:35, 
        image:'/images/hajjPackageThree.png'
    }]
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
    <div className={styles.treandingSlider}>
        <Slider {...settings}>
        {
            data && data.map((item, index) => (
                <div className={styles.packageBox} key={index}>
                    <div className={styles.packageBoxMain}>
                        <img src={item.image} alt="image" />
                        <p className={styles.packageTitle}>{item.name}</p>
                        <button className={styles.daysButton}>{item.duration} Days</button>
                        <p className={styles.price}><span className={styles.priceTile}>Starts From</span> {item.price}TK</p>
                    <button className={styles.detailsButton}>View Details</button>
                    </div>
                </div>
            ))
        }
        </Slider>
       
    </div>
  )
}

export default TrendingSlider
