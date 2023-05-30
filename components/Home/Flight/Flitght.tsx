import React from 'react'
import styles from './Flight.module.css'
import SliderFocus from '@/components/Shared/SliderFocus/SliderFocus'

const Flitght = () => {
    const data = [
        {
            img:'/images/1.png',
            region:'Cox’s Bazar',
            price:'15000'
        },
        {
            img:'/images/2.png',
            region:'Shylet',
            price:'3000'
        },
        {
            img:'/images/3.png',
            region:'Saint Martin',
            price:'4500'
        },
        {
            img:'/images/4.png',
            region:'Sundarban',
            price:'6000'
        }
    ]
  return (
    <div className={styles.flightMain}>
       <h1>Best Places To Visit In Bangladesh</h1>
       <p>Bangladesh is a South Asian country with a rich cultural heritage <br /> and natural beauty. It is home to the world's largest mangrove <br /> forest,  culture, and natural beauty.</p>
      <SliderFocus data={data}/>
    </div>
  )
}

export default Flitght
