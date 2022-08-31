import React from 'react';
import logo from '../../images/Introducing AKACOIN.png'
import Plant from '../../images/Plant Bitcoin.png'
import rectangle3 from '../../images/Rectangle 3.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container '>
        <div className='container'>
            <div className='row '>

                <div className='banner-desc col-12 col-lg-6'>
                    <div className='logo-container mt-5'>
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <h2 className='banner-title fs-1'>Living Ecosystem Decentralized Token</h2>
                    <p className=''>Akacoin is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications.</p>

                    <div className='button-container'>
                        <button className='button button1 '>GET started</button>
                        <button className='button button2'><img src={rectangle3} alt="" /> Git Source</button>
                    </div>
                </div>

                <div className='col-12 col-lg-6 '>

                    {/* <img className='position-absolute start-100 bottom-50 ' src={Bitcoin1} alt="" />
                        <img className='position-absolute end-0 top-0 ' src={Bitcoin2} alt="" />
                        <img className='position-absolute to-50 end-50 ' src={Bitcoin3} alt="" /> */}
                    <img className='w-100' src={Plant} alt="" />

                </div>

            </div>
        </div >
    </div>
    );
};

export default Banner;