import React from 'react';
import pologon2 from "../../images/Polygon 2 (1).png"
import vactor from "../../images/Vector.png"
import vactor1 from "../../images/Vector (1).png"
import vactor2 from "../../images/Vector (2).png"

import Rectangle1 from "../../images/Rectangle 22.png"
import Rectangle2 from "../../images/Rectangle 23.png"
import Rectangle3 from "../../images/Rectangle 24.png"

import "./Guid.css"

const AkacoinAbout = () => {
    return (
        <div className='container'>

        <div className='row d-flex justify-content-center'>
            {/* card 1 */}

            <div className='wallet-card col-12 col-lg-4'>
                <img className='rectangle3' src={Rectangle3} alt="" />
                <div className='d-flex mb-3 gap-3'>
                    <h2 className='card-title'>Akacoin
                        Community</h2>
                </div>
                <div>
                    <p>There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.</p>
                </div>
                <div className='d-flex gap-2'>
                    <img src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                    <img src={vactor2} alt="" />
                </div>
                <p className='fs-6 bottom'>Learn More</p>
                <img className='rectangle1' src={Rectangle1} alt="" />
                <img className='rectangle2' src={Rectangle2} alt="" />
            </div>


            {/* card 2*/}
            <div className='wallet-card col-12 col-lg-4'>
                <img className='rectangle3' src={Rectangle3} alt="" />
                <div className='d-flex mb-3 gap-3'>
                    <h2 className='card-title'>Become a
                        Validator</h2>
                </div>
                <div>
                    <p>Help secure the network by
                        running decentralized infrastructure. Learn about operating a validator node.</p>
                </div>
                <div className='d-flex gap-2'>
                    <img src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                    <img src={vactor2} alt="" />
                </div>
                <p className='fs-6 bottom'>Choose Wallet</p>
                <img className='rectangle1' src={Rectangle1} alt="" />
                <img className='rectangle2' src={Rectangle2} alt="" />
            </div>


            {/* card 2 */}
            <div className='wallet-card col-12 col-lg-4'>
                <img className='rectangle3' src={Rectangle3} alt="" />
                <div className='d-flex mb-3 gap-3'>
                    <h2 className='card-title'>Dev. Resource</h2>
                </div>
                <div>
                    <p>See the get started guide, videos, tutorials, SDKs, reference implementations, and more.</p>
                </div>
                <div className='d-flex gap-2'>
                    <img src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                    <img src={vactor2} alt="" />
                </div>
                <p className='fs-6 bottom'>Start Building</p>
                <img className='rectangle1' src={Rectangle1} alt="" />
                <img className='rectangle2' src={Rectangle2} alt="" />
            </div>
        </div>
    </div>
    );
};

export default AkacoinAbout;