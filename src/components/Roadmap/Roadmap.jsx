import React from 'react';
import './Roadmap.css'
import { images } from '../../utils/images/images';

export default function Roadmap() {
    return (
        <section className='roadmap-section'>
            <div className='rs-head-cont'>
                <h2>
                    <img src={images.markerIcon} alt="marker" />
                    ROADMAP
                </h2>

                <p>Chaufr’s projected timeline & development <br /> goals.</p>
            </div>

            <div className='roadmap-right-cont'>
                <div className='rrc-left-section'>
                    <div className='rrc-left-box'>
                        <div>
                            <div>FEBRUARY 01, 2025</div>
                            <div>Launch presale campaign</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>

                    <div className='rrc-left-box'>
                        <div>
                            <div>JANUARY 21, 2025</div>
                            <div>Chaufr public launch</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>

                    <div className='rrc-left-box'>
                        <div>
                            <div>JANUARY 21, 2025</div>
                            <div>Chaufr virtual Visa/ MC introduction</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>
                </div>

                <div className='rodamap-bar'>
                    <div></div>
                </div>

                <div className='rrc-right-section'>
                    <div className='rrc-rs-box'>
                        <div>
                            <div>January 21, 2025</div>
                            <div>Creation of the idea of Chaufr</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>

                    <div className='rrc-rs-box'>
                        <div>
                            <div>January 21, 2025</div>
                            <div>App development and  closed ended beta testing</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>

                    <div className='rrc-rs-box'>
                        <div>
                            <div>January 21, 2025</div>
                            <div>Expansion and token utility growth</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>

                    <div className='rrc-rs-box'>
                        <div>
                            <div>January 21, 2025</div>
                            <div>Global scaling & ecosystem development</div>
                        </div>
                        <div className='rrc-bar-tick'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}