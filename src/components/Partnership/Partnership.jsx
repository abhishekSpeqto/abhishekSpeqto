import React from 'react'
import './Partnership.css'
import { images } from '../../utils/images/images'

export default function Partnership() {
    return (
        <section>
            <h2 className='partnership-heading'>PROJECTED GLOBAL BRAND PARTNERSHIPS</h2>

            <div className='partnership-image-cont'>
                <div><img src={images.partnership1} alt="partner1" /></div>
                <div><img src={images.partnership2} alt="partner2" /></div>
                <div><img src={images.partnership3} alt="partner3" /></div>
                <div><img src={images.partnership4} alt="partner4" /></div>
                <div><img src={images.partnership5} alt="partner5" /></div>
                <div><img src={images.partnership6} alt="partner6" /></div>
            </div>

            <div className='team-cont'>
                <img src={images.teamIcon} alt="team-image" />
            </div>
        </section>
    )
}