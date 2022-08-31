import React from 'react';
import website from '../../images/Website.png'
import rectangle from "../../images/Rectangle 7.png"
import arrow from "../../images/Arrow 1.png"
import './Akacoin.css'

const Akacoin = () => {
    return (
        <div className='container'>
            <h2 className='title'>What Is Akacoin?</h2>
            <div className='row akacoin-container  d-flex justify-content-center '>
                <div className='col-12 col-lg-6'>
                    <div className=''>
                        <h2 className='image-title'>The fastest growing and community friendly</h2>
                        <img className='w-100' src={website} alt="" />
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <p className='akacoin-desc mb-5' >Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.</p>
                    <a className='explore' href="_#">Explore Ecosystem <img className='ms-2' src={arrow} alt="" /></a>
                    <img className='mt-4 w-100' src={rectangle} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Akacoin;