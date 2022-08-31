import React from 'react';
import pologon2 from "../../images/Polygon 2 (1).png"
import vactor from "../../images/Vector.png"
import vactor1 from "../../images/Vector (1).png"
import vactor2 from "../../images/Vector (2).png"

import Rectangle1 from "../../images/Rectangle 22.png"
import Rectangle2 from "../../images/Rectangle 23.png"
import Rectangle3 from "../../images/Rectangle 24.png"
// 
import Rectangle4 from "../../images/Rectangle 30.png"
import Rectangle5 from "../../images/Rectangle 27.png"
import Rectangle6 from "../../images/Frame 1.png"
import { BsArrowRight } from 'react-icons/bs';
import './Wallet.css'

const Wallets = () => {
    return (
        <div className='container p-2'>
            <h2 className='title'>Choose Your Wallets</h2>

            <div className='row d-flex justify-content-center'>
                {/* card 1 */}

                <div className='wallet-card   col-12 col-lg-4 '>
                    <img className='rectangle3' src={Rectangle3} alt="" />
                    <div className='d-flex mb-3 gap-3'>
                        <img className='' src={pologon2} alt="" />
                        <h2 className='card-title'>AkaWallet  <BsArrowRight /></h2>
                    </div>
                    <div>
                        <p>Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <img src={vactor} alt="" />
                        <img src={vactor1} alt="" />
                        <img src={vactor2} alt="" />
                    </div>
                    <p className='fs-6 bottom'>Choose Wallet  <BsArrowRight /></p>
                    <img className='rectangle1' src={Rectangle1} alt="" />
                    <img className='rectangle2' src={Rectangle2} alt="" />
                </div>


                {/* card 2*/}
                <div className='wallet-card  col-12 col-lg-4'>
                    <img className='rectangle3' src={Rectangle4} alt="" />
                    <div className='d-flex mb-3 gap-3'>
                        <img className='' src={pologon2} alt="" />
                        <h2 className='card-title'>AkaSafe</h2>
                    </div>
                    <div>
                        <p>AkaSafe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies.</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <img src={vactor} alt="" />
                        <img src={vactor1} alt="" />
                        <img src={vactor2} alt="" />
                    </div>
                    <p className='fs-6 bottom'>Choose Wallet  <BsArrowRight /></p>
                    <img className='rectangle1' src={Rectangle1} alt="" />
                    <img className='rectangle' src={Rectangle5} alt="" />
                    {/* <img className='rectangle4' src={Rectangle4} alt="" /> */}
                </div>


                {/* card 3 */}
                <div className='wallet-card col-12 col-lg-4'>
                    <img className='rectangle3' src={Rectangle3} alt="" />
                    <div className='d-flex mb-3 gap-3'>
                        <img className='' src={pologon2} alt="" />
                        <h2 className='card-title'>AkaMask</h2>
                    </div>
                    <div>
                        <p>AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <img src={vactor} alt="" />
                        <img src={vactor1} alt="" />
                        <img src={vactor2} alt="" />
                    </div>
                    <p className='fs-6 bottom'>Choose Wallet  <BsArrowRight /></p>
                    <img className='rectangle1' src={Rectangle1} alt="" />
                    <img className='rectangle2' src={Rectangle2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Wallets;