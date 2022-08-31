import React from 'react';
import Akacoin from './Akacoin';
import Banner from './Banner';
import BuyCoin from './BuyCoin';
import Footer from './Footer';
import Guide from './Guide';
import Wallets from './Wallets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Akacoin></Akacoin>
            <Wallets></Wallets>
            <BuyCoin></BuyCoin>
            <Guide></Guide>
            <Footer></Footer>
        </div>
    );
};

export default Home;