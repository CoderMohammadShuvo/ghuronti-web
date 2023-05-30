import React from 'react'
import styles from './Visa.module.css'

const Visa = () => {
    const data = [
        {
            img: "/images/china.png",
            name: 'China'
        },
        {
            img: "/images/usa.png",
            name: 'USA'
        },
        {
            img: "/images/ger.png",
            name: 'Germany'
        },
        {
            img: "/images/aust.png",
            name: 'Australia'
        },
        {
            img: "/images/ita.png",
            name: 'Italy'
        },
        {
            img: "/images/can.png",
            name: 'Canada'
        },
        {
            img: "/images/eng.png",
            name: 'England'
        },
        {
            img: "/images/mal.png",
            name: 'Malaysia'
        },
    ]

    const dataTwo = [
        {
            img: '/images/student.png',
            name: 'For Student',
            benifit: ['Student ID card Photo Copy', 'Birth Certificate (Only for Child & infant)', 'Travel Letter or Leave letter from the Educational Institute.'],
        },
        {
            img: '/images/doctor.png',
            name: 'For Medical',
            benifit: ['In case of medical treatment, a copy of the appointment letter from a hospital in Thailand and if applicable, an original letter from a local doctor/hospital if the applicant is a first-time traveler.', 'Recent case summary of the patient’s medical reports issued by the local hospital.', 'Booking confirmation letter (such as Med letter & Action Plan) of an Air Ambulance.'],
        },
        {
            img: '/images/employee.png',
            name: 'For Job Holder',
            benifit: ['In the Case of Personal Account Statement (Savings Account) - need to provide the Salary Certificate/Payslip last 03 months', 'Visiting card copy.', 'For Govt. employees - GO is required with an English translation notary must be required.   '],
        }
    ]
    return (
        <div className={styles.visaPageMain}>
            <h1>Top visited countries</h1>
            <p>The Top Ranking of Most Visited Countries in the World is based on <br /> the most recent available numbers of visitors a country</p>
            <div className={styles.countryBox}>
                {
                    data && data.map((item, index) => (
                        <div className={styles.countryFirstLine}>
                            <img src={item.img} alt='flag' />
                            <p>{item.name}</p>

                        </div>
                    ))
                }
                <button>View More countries</button>
            </div>
            <div className={styles.visaContnet}>
                {
                    dataTwo && dataTwo.map((item, index) => (
                        <div className={styles.visaIndiCon}>
                            <img src={item.img} alt='flag' />
                            <div className={styles.infoDiv}>
                                <h2>{item.name}</h2>
                                {
                                    item.benifit.map((items, index) => (
                                        <div className={styles.liInfo}>
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
                                            <h6>{items}</h6>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Visa