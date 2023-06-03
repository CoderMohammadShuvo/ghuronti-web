import React from 'react'
import Navbar from '../Shared/Navbar'
import styles from './Terms.module.css'
import Footer from '../Shared/Footer/Footer'

const TermsandCondition = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.termsMain}>
        <div className={styles.termContnent}>
            <h1>Terms & Conditions</h1>
            <p className={styles.mainPara}><span className={styles.heading}>Introductions:</span>Terms & Conditions (T&C) that follow in this article, as may be revised from time to time, are applicable to all our services available online or offline. These terms and conditions are applicable to the services we provide for personal, non-commercial use of our services. These T&C will not be applicable to our relationship with other commercial service providers (B2B) that we have an affiliation with.</p>
            <p className={styles.mainPara}><span className={styles.heading}>Refund Modality:</span>The company will refund the money exactly the way it was received. The Refund process will be the same as per the Payment modality. However, claiming refunds for any purchases made through MFS (Mobile Financial Services) e.g. Bkash, Nagad, Rocket etc will incur a service/cash-out charge which has to be borne by the customer. The charge amount will vary according to the MFS availed during the purchase.</p>
            <span className={styles.heading}>Auto Refund & Auto Void: Terms & Conditions</span>
            <p className={styles.mainPara} style={{marginTop:'0px'}}>ShareTrip customers can now claim Refund and Void automatically from App/Web</p>
            <li className={styles.mainPara}>An airline refund charge will be applicable.</li>
            <li className={styles.mainPara}>ST Convenience will be applicable.</li>
            <li className={styles.mainPara}>The refund may take upto 4-6 weeks from the date of applying for an auto refund.</li>
            <li className={styles.mainPara}>The company will refund the money exactly the way it was received. The Refund process will be the same as per the Payment modality.</li>
            <li className={styles.mainPara}>However, claiming refunds for any purchases made through MFS (Mobile Financial Services) e.g. Bkash, Nagad, Rocket etc will incur a service/cash-out charge which has to be borne by the customer. The charge amount will vary according to the MFS availed during the purchase.</li>
            <li className={styles.mainPara}>Refund applicable only on refundable travel services.</li>
            <li className={styles.mainPara}>Refund modality will be as per the carrier, airlines, hotel, vendor, and service provider.</li>
            <li className={styles.mainPara}>If the flight is within 24 hours of the refund application, a no-show charge will be applicable.</li>
            <li className={styles.mainPara}>Payment void will not be applicable for flights on the same calendar date.</li>
            <li className={styles.mainPara}>Payment void will not be applicable on Low-Cost Carrier flights like Jazeera Airways, Air Arabia, Air Asia, Indigo, SpiceJet etc.</li>
            <li className={styles.mainPara}>Payment void will be made exactly the same way it was received.</li>
            <li className={styles.mainPara}>Payment void may take upto 72 hours.</li>
            <p className={styles.mainPara}><span className={styles.heading}>Important:</span>Due to Covid-19, Airline has the authority to cancel and/or reschedule the flight at any time. The destination you’re travelling to might be under the Covid-19 travel restriction. Please check health advisories before you travel. In case of cancellation/reschedule airline policy and ST convenience fee will be applicable.</p>
            <p className={styles.mainPara}><span className={styles.heading}>Use of the Services:</span> As a condition of using our services, you attest that you are at least 18 years of age. You intend to use our services in accordance with these terms and conditions and you will only book services from us with true and accurate information. If you book services for any other person except you, you are responsible for informing that person about our terms and conditions. </p>
            <p className={styles.mainPara}><span className={styles.heading}>Deleting your ShareTrip Account:</span> Users can delete their accounts at any time through the Profile>Manage Data>Delete Account in the ShareTrip app. If you submit a request to delete your account, it will be completely deleted within 72 hours.</p>
            <p className={styles.mainPara}><span className={styles.heading}>Flight:</span> Clients can book tickets all over the world using our state-of-the-art app and website. The client can use any local or international debit or credit card to pay for the flight after booking from the Website or App.For LCC flights, users must upload a copy of their valid passport, visa & other necessary documents while issuing the tickets to avoid cancellation from the respective Airlines. <br />
            (For example Indigo Airlines, Salam Air etc.) <br />The refund amount will be disbursed after deducting the ShareTrip service fee. Please note that it takes a minimum of 10-12 bank working weeks to complete the refund process. This is not applicable for non-refundable tickets. <br/>
            * ShareTrip convenience fee is non-refundable for online purchases. <br /> * In case of cancellation of Bangladesh Biman Airlines flight, the refund will be processed within a minimum of 12 bank working weeks as per airlines policy. <br />
            * For Saudia Airlines flights, the refund will be processed within a minimum of 12 bank working weeks as per airlines policy. <br />
            * In the case of Air India half portion flight refund, the refund will be processed within a minimum of 12 bank working weeks as per airlines policy. <br />
            * Cancellation and refund policies differ from airline to airline.<br />
            * For cancellation by Airline, ShareTrip will not charge any additional fees. For voluntary cancellation charges are applicable and given <br />
            * For cancellations and refunds, we always follow the airline's refund policy. The airline solely holds the right to change any policy. ShareTrip has no control over the airline's policy. <br />
            * For any refund/cancellation/date change-related queries kindly email us at flight@sharetrip.net. <br/>
            * If airlines increase the fare of a ticket during the booking period, a client has to pay the additional amount, else we will refund the paid amount. <br/>
            * In case of date change/re-issue of the ticket for a child who will be crossing the child age to adult (as per airline policy) in the new travel date, a new charge of the ticket will be the difference of airfare, plus a date change fee of an adult along with any other charges applicable as per airline policy. <br/>
            * International check-in counters close 1.5 hours before flight time & domestic counters close 1 hour before the flight time.
            </p>

        </div>
      </div>
      <Footer/>
      </>
  )
}

export default TermsandCondition
