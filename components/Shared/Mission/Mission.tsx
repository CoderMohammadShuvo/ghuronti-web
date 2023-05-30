import React from 'react'
import styles from './Mission.module.css'
const Mission = () => {
  return (
    <div className={styles.missionMain}>
        <div className={styles.mission}>
            <h1>Mission</h1>
            <p>Providing advanced <br /> travel solutions with <br /> great care and <br /> satisfaction.</p>
        </div>
        <div className={styles.mission}>
            <h1>Vision</h1>
            <p><span style={{color:'#4AB449'}}>Ghurtoni.com</span> is <br />  partnering with you <br /> to reach your dream <br /> destinations.</p>
        </div>
    </div>
  )
}
  
export default Mission
