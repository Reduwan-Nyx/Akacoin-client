import React, { useEffect, useState } from 'react';
import './BuyCoin.css'

const BuyCoin = () => {

    const [datas, setDatas] = useState([])


    //  const datas = [
    //     {
    //         "_id": "1",
    //         "img": "https://i.ibb.co/rdFJFMR/coin1.jpg",
    //         "name": "Gold-color-bitcoin"
    //     },
    //     {
    //         "_id": "2",
    //         "img": "https://i.ibb.co/gv0KbYb/coin2.jpg",
    //         "name": "Gold-color-bitcoin"
    //     },
    //     {
    //         "_id": "3",
    //         "img": "https://i.ibb.co/7GLrBt9/coin3.jpg",
    //         "name": "Gold-color-bitcoin"
    //     },
    //     {
    //         "_id": "4",
    //         "img": "https://i.ibb.co/Qjr5gjB/coin4.jpg",
    //         "name": "Gold-color-bitcoin"
    //     },
    // ]



    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(json => setDatas(json))
    }, [])
    return (
        <div className='container mt-5'>
            <h2 className='mb-4 text-center'>Buy your coin</h2>
            <div className="row d-flex justify-content-center gap-3">
                {
                    datas.map(data => {
                        return <div key={data._id} className='coin-card col-12 col-md-6 col-lg-3'>
                            <div className=''>
                                <img className='w-50' src={data.img} alt="" />
                            </div>
                            <h5 className='card-title'>Name: {data.name}</h5>
                            <button></button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default BuyCoin;