import React from 'react'
import './Banner.css'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useBalance } from 'wagmi'
export const Banner = () => {
    const { open } = useAppKit();
    const { address, isConnected} = useAppKitAccount()
    const { data: balanceData } = useBalance({ address })

    const progress = 60

    const Parentdiv = {
        height: '25px',
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 40,
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'white',
        borderRadius: '20px 0px 0px 20px',
        textAlign: 'center'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }


    return (
        <div className='banner-main'>
            <div className='image-div'>
                {/* <img src={bgImage} alt="" width='100%' height='100%' /> */}
                <div className='banner-con'>
                    <div className='banner-text'>
                        <h2 className="banner-heading">
                            Redefining Luxury Ride-Hailing with Blockchain Technology
                        </h2>
                        <p className='banner-content'>
                            Experience the future of luxury transportation with Chaufr, where cutting-edge blockchain technology meets premium ride-hailing. Our platform is not only set to deliver unparalleled comfort and convenience but also introduces
                            <strong>
                                ChaufrCoin ($CHFR)
                            </strong>
                            as the innovative payment solution, empowering seamless, secure, and rewarding transactions. Be part of the revolution in mobility—luxury redefined.
                        </p>

                    </div>
                    <div className='banner-form'>
                        <p>$CHAUFR PRESALE</p>
                        <div className='timer'>
                            <ul className='timer-list'>
                                <li className='timer-list-item'>
                                    <p>DAYS</p>
                                    <span>01</span>
                                </li>
                                <li className='timer-list-item'>
                                    <p>HOURS</p>
                                    <span>23</span>
                                </li>
                                <li className='timer-list-item'>
                                    <p>MINUTES</p>
                                    <span>23</span>
                                </li>
                                <li className='timer-list-item'>
                                    <p>SECONDS</p>
                                    <span>03</span>
                                </li>
                            </ul>
                            <span className=''>USDT RAISED: $2,949000</span>
                            <div className='progress-bar'>
                                <div style={Parentdiv}>
                                    <div style={Childdiv}>
                                        <span style={progresstext}>Until Price Rise</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-value'>
                            <p>My PURCHASED = 0  <i className="bi bi-info-circle"></i></p>
                            <p>My STAKEABLE = 0  <i className="bi bi-info-circle"></i></p>
                        </div>
                        <div className='divider-line'>
                            <div className='value'>
                                <p>1 $CHAUFR = $0.01</p>
                                <p>Phase 2 price- 1 $CHAUFR = $0.0325</p>
                            </div>
                        </div>
                        <div className='payment-button'>
                            <div className='buy-buttons'>
                                <button className='buy-button buy-card'>
                                    BUY WITH CARD
                                </button>
                                {
                                    !isConnected ?
                                        <button onClick={() => open()} className='buy-button buy-crypto'>BUY WITH CRYPTO</button> :
                                        <div className="buy-btn-group" onClick={() => open()}>
                                            <button className="wallet-balance"> {balanceData?.formatted.slice(0, 5)} {balanceData?.symbol}</button>
                                            <button className="wallet-address"> {`${address.slice(0, 4)}...${address.slice(-4)}`}</button>
                                        </div>
                                }
                            </div>
                            <div className='wallet'>
                                <p>DON'T HAVE A WALLET</p>
                                <p>Powered by <strong>Web3Payments</strong></p>
                            </div>
                            <div className='audit-buttons'>
                                <button className='audit-btn'>
                                    AUDIT
                                </button>
                                <button className='audit-btn'>
                                    CMC
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
