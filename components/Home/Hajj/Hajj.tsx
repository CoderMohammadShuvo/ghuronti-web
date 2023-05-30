import React from 'react'
import styles from './Hajj.module.css';
const Hajj = () => {
    const data = [
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
        },

    ]
  return (
    <div className={styles.hajjMain}>
      <h1>Best Hajj Packages 2023 from bangladesh</h1>
      <p className={styles.hajjMainPara}>Some of the renowned and best Hajj agencies in Bangladesh are <br/> Universal Travel & Tours, Holy Hajj & Umrah</p>
      <div className={styles.hajjPackages}>
        {
            data && data.map((item, index) => (
                <div className={styles.packageBox} key={index}>
                    <img src={item.image} alt='' className={styles.hajjPackageCOverImage} />
                    <p className={styles.packageTitle}>{item.name}</p>
                    {
                      item.facility && item.facility.map((items, index) => (
                        <div key={index} className={styles.facilityMain}>
                           <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"

  >
    <g clipPath="url(#a)">
      <path
        fill="#4AB449"
        fillOpacity={0.5}
        d="M10 6.25a3.751 3.751 0 0 0 0 7.5A3.753 3.753 0 0 0 13.75 10c0-2.07-1.715-3.75-3.75-3.75ZM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm0 18.125c-4.48 0-8.125-3.645-8.125-8.125S5.52 1.875 10 1.875 18.125 5.52 18.125 10 14.48 18.125 10 18.125Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
  <p>{items}</p>

                        </div>
                      ))
                    }
                    <button className={styles.daysButton}>{item.duration} Days</button>
                    <p className={styles.price}><span className={styles.priceTile}>Starts From</span> {item.price}TK</p>
                    <button className={styles.detailsButton}>View Details</button>
                </div>
            ))
        }
        
      </div>
      <h1>Hajj pre-registration Bangladesh 2023- 2024-2025</h1>
      <p className={styles.hajjMainPara}>Non-resident & Resident Bangladeshi adults and children can <br/> apply for hajj pre-registration through the Hajj agency.</p>
      <div className={styles.preRegReq}>
        <div className={styles.req}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  
  >
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
    />
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 4 12 14.01l-3-3"
    />
  </svg>
  <p>NID scanned soft copy/photocopy</p>
        </div>

        <div className={styles.req}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  
  >
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
    />
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 4 12 14.01l-3-3"
    />
  </svg>
  <p>Birth certificate's color soft copy</p>
        </div>
        <div className={styles.req}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  
  >
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
    />
    <path
      stroke="#4AB449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 4 12 14.01l-3-3"
    />
  </svg>
  <p>Valid mobile number + email id</p>
        </div>
      </div>
      <div className={styles.preReg}>
          <button>Get pre-registration</button>
      </div>
    </div>
  )
}

export default Hajj
 