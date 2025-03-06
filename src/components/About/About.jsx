import React from 'react'
import './About.css'
import { images } from '../../utils/images/images'

export const About = () => {
    return (
        <div className='about-main-cont'>
            {/* <div className='about-cont-oval-back'></div> */}
            <div className='about-cont-oval'></div>

            <div className='about-con'>
                <h1>About $CHUFR</h1>
                <div className='about-content'>
                    <div className='ac-header'>
                        <img src={images.markerIcon} alt="icon" srcset="" />
                        WHY CHOOSE CHUFR
                    </div>
                    <h2>Core features of $CHUFR</h2>

                    <ul className='about-list'>
                        <li className='about-list-item'>
                            <span className='list-count'>01</span>
                            <h2>How CHUFR Coin Powers Chaufr</h2>
                            <p>
                                CHUFR Coin plays a central role ni Chaufr’s operations. Customers convert fiat currency into CHUFR Coin to pay for rides, maintaining demand and value for the token. Drivers are paid in full fiat, but have the option to collect tips in CHUFR Coin, further promoting it’s adoption and circulation. Additionally, customers and drivers can earn CHUFR Coin through our rewards program for reaching milestones, receiving high ratings, or frequent use of the platform.
                            </p>
                        </li>

                        <li className='about-list-item'>
                            <span className='list-count'>02</span>
                            <h2>Be Part of the Presale</h2>
                            <p>
                                By participating in the CHUFR Coin presale, you are not just purchasing a cryptocurrency- you are investing in the future of luxury transportation. Funds raised during the presale will be used to enhance Chaufr’s platform, grow operations, expand the liquidity pool to stabilize CHUFR Coin’s value, and form strategic partnerships to solidify our presence in key markets. Offered at an exclusive presale price of $0.01 per token for PHASE  1, PHASE 2 kicks off with the raising of the presale price to $0.0315, providing adopters with the opportunity to benefit from its potential future growth.
                            </p>
                        </li>

                        <li className='about-list-item'>
                            <span className='list-count'>03</span>
                            <h2>Join the Future of Ride Hailing</h2>
                            <p>
                                $CHUFR Coin is not just a digital asset; it’s a transformative tool that bridges luxury and blockchain technology. With a focus on innovation, transparency, and customer-first services, Chaufr is redefining ride-hailing as we know it. Do not miss the opportunity to be part of this grondbreaking ecosystem. Together, let’s drive into the future with:

                                Chaufr: Ride Hailing, Redefined.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
