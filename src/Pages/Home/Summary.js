import React from 'react';
import './Guid.css'
const Summary = () => {
    return (
        <div className='summery-container'>
        <div className='container '>
            <div className='row'>

                <div className='col col-lg-2 p-3'>
                    <p>Transactions/Second</p>
                    <h3>2,905</h3>
                </div>

                <div className='col  col-lg-4 p-3'>
                    <p>Total Transactions</p>
                    <h3>$64,540,470,129</h3>
                </div>

                <div className='col  col-lg-4 p-3'>
                    <p>Avg. Cost/Transaction</p>
                    <h3>$0.00025</h3>
                </div>

                <div className='col col-lg-2 p-3'>
                    <p>Validator Nodes</p>
                    <h3>1,645</h3>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Summary;