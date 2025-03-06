import React from 'react'
import './Banner.css'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useBalance } from 'wagmi'
import { images } from '../../utils/images/images'

export const Banner = () => {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount()
    const { data: balanceData } = useBalance({ address })

    return (
        <main className='banner-main'>
            <div className='banner-cont'>
                <div className='bc-left-sec'>
                    <div className='bcls-heading'>
                        <img src={images.markerIcon} alt='marker' />
                        <span>Redefining luxury ride-hailing with blockchain technology</span>
                    </div>

                    <div className='bcls-para'>
                        Experience the future of luxury transportation with Chaufr, where cutting edge blockchain technology meets premium ride-hailing. Our platform is not only set to deliver unparalleled comfort and convince but also introduces ChaufrCoin ($CHUFR) as the innovative payment solution, empowering seamless, secure, and rewarding transactions for everyday rides. Be part of the revolution in mobility- luxury redefined.
                    </div>

                    <div className='bcls-btn-cont'>
                        <button type="button" className='gradient-btn bclsbc-btn1'><img src={images.buttonIcon} alt='icon' />WHITEPAPER</button>
                        <button type="button" className='bclsbc-btn2'>AUDIT INFORMATION</button>
                    </div>
                </div>

                <div className='bc-right-sec'>
                    <div className='bcrs-box bcrs-left-box'>
                        <h2>$CHUFR sales progress</h2>

                        <div className='bcrslb-bar-cont'>
                            <div className='bcrslb-bar-top-cont'>
                                <div>
                                    <p>RAISED</p>
                                    <p>57,230 COIN</p>
                                </div>

                                <div>
                                    <p>TOTAL COIN</p>
                                    <p>300,000,000</p>
                                </div>
                            </div>

                            <div className="progress">
                                <div className="progress-bar progress-bar-success" style={{ width: `${65}%` }}>
                                    <div className='progress-tick'></div>
                                </div>
                            </div>

                            <div className='bcrslb-bar-bottom-cont'>
                                <div className='bcrslb-bbc-cont'>
                                    <div className='bcrslb-bbc-hook'></div>
                                    <div>
                                        <p>SOFT CAP</p>
                                        <p>57,000</p>
                                    </div>
                                </div>

                                <div className='bcrslb-bbc-cont'>
                                    <div className='bcrslb-bbc-hook'></div>
                                    <div>
                                        <p>HARD CAP</p>
                                        <p>5,000,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bcrs-timer-cont'>
                            <div>Phase 1 sale ends in:</div>

                            <div className='bcrs-tc-sub-cont'>
                                <div className='bcrs-tcsc-number'>
                                    <div>29</div>
                                    <div>Days</div>
                                </div>
                                <div className='bcrs-tcsc-number'>
                                    <div>20</div>
                                    <div>Hours</div>
                                </div>
                                <div className='bcrs-tcsc-number'>
                                    <div>39</div>
                                    <div>Minutes</div>
                                </div>
                                <div className='bcrs-tcsc-number'>
                                    <div>00</div>
                                    <div>Seconds</div>
                                </div>
                            </div>
                        </div>

                        <button type="button" className='gradient-btn bcrs-btn'>
                            <img src={images.registerButtonIcon} alt="reveal-icon" />
                            REGISTER & BUY TOKEN
                        </button>
                    </div>

                    <div className='bcrs-box bcrs-right-box'>
                        <h2>Sales Information</h2>

                        <div className='bcrs-rb-container'>
                            <div className='bcrs-rb-section'>
                                <div>PUBLIC SALE STARTS</div>
                                <div>OCTOBER 01, 2025</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>ACCEPTED</div>
                                <div>BNB, USDT</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>TOKEN SUPPLY</div>
                                <div>1,000,000,000</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>T. ALLOCATED FOR ICO</div>
                                <div>300,000,000</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>PHASE 1</div>
                                <div>APRIL 01, 2025</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>PHASE 2</div>
                                <div>JULY 01, 2025</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>PHASE 1 VALUE</div>
                                <div>$0.01 USD</div>
                            </div>

                            <div className='bcrs-rb-section'>
                                <div>PHASE 2 VALUE</div>
                                <div>$0.0315 USD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
