import React from 'react';
import './Footer.css'
import image from "../../images/Image.png"
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div div className='container'>
        <div className='footer'>

            <div className='row'>

                {/* 1 */}
                <div className='col-12 col-lg-4 my-3'>
                    <img className='footer-logo' src={image} alt="" />
                    <li>Living Ecosystem Decentralized Token</li>
                    <div className='d-flex gap-2 mt-3 fs-2'>
                        <AiFillGithub />
                        <BsDiscord />
                        <BsFacebook />
                        <AiFillLinkedin />
                    </div>
                </div>

                {/* 2 */}
                <div className='col-12 col-lg-2  my-3'>
                    <h4>Pages</h4>
                    <li>Network Statistic</li>
                    <li>What is AkaCoin</li>
                    <li> Wallets</li>
                    <li>Quick Start Guide</li>
                </div>

                {/* 3 */}
                <div className='col-12 col-lg-2  my-3'>
                    <h4>Learn</h4>
                    <li>Blog</li>
                    <li>Video</li>
                    <li>Product</li>
                    <li>Network states</li>
                </div>

                {/* 4 */}
                <div className='col-12 col-lg-2  my-3'>
                    <h4>Support</h4>
                    <li>Custommer Service</li>
                    <li>FAQ</li>
                    <li>Community</li>
                </div>

                {/* 5 */}
                <div className='col-12 col-lg-2  my-3'>
                    <h4>About AKA.Coin</h4>
                    <li>About us</li>
                    <li>Privacy policy</li>
                    <li>Term of use</li>
                    <li>Quick start guide</li>
                    <li>Language support</li>
                    <li>Cookie policy</li>
                </div>

            </div>



        </div>
    </div>
    );
};

export default Footer;