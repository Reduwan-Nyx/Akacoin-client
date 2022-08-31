import React from 'react';
import wallet from "../../images/Wallet.png"
import hand from "../../images/Hand Hold Bitcoin.png"
import laptop from "../../images/Laptop.png"
import machin from "../../images/Machine.png"
import Summary from './Summary';
import AkacoinAbout from './AkacoinAbout';

const Guide = () => {
    const datas = [
        {
            "img": wallet,
            "title": "1. Create a wallet",
            "desc": "Create a Wallet using either a desktop computer or an mobile device"
        },
        {
            "img": hand,
            "title": "2. Buy ETH",
            "desc": "You can buy Ethereum (ETH) directly on MetaMask or transfer it"
        },
        {
            "img": laptop,
            "title": "3. Connect your wallet",
            "desc": "Access your wallet to AoaSwap by clicking ‘Connect to a wallet’"
        },
        {
            "img": machin,
            "title": "4. Swap ETH to AKO",
            "desc": "You can start swapping as you have ETH available! Press ‘Select a token’ "
        },
    ]

    return (
        <>
        <div className='container '>
            <h2 className='title'>Quick Start Guide</h2>

            <div className='row guide-container d-flex justify-content-center '>
                {datas.map((data, index) => {
                    return <div key={index} className='guide col-12 col-lg-6 col-lg-6 d-flex gap-3 mb-4 mt-5 w-100'>
                        <div className='img-container'>
                            <img className='w-100' src={data.img} alt="" />
                        </div>
                        <div className="guid-detail w-100 lg:w-50">
                            <h2 >{data.title}</h2>
                            <p>{data.desc}</p>
                        </div>

                    </div>
                })


                }

            </div>
        </div>
        <AkacoinAbout />
        <Summary></Summary>
    </>
    );
};

export default Guide;