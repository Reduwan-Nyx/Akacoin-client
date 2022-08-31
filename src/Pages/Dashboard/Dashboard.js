import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
        <div class="d-flex" id="wrapper">
       
            <div class="" id="sidebar-wrapper">
                <div class="bg-primary list-group list-group-flush my-3">
                    <Link to="addcard" class="list-group-item  fw-bold">ADD WALLET</Link>
                    <Link to="mycard" class="list-group-item  fw-bold">MY CARD</Link>
                    <Link to="mycard" class="list-group-item  fw-bold">ADMIN</Link>
                    <Link to="allcoin" class="list-group-item  fw-bold">ALL COIN</Link>
                    <Link to="addcoin" class="list-group-item  fw-bold">ADD COIN</Link>
                </div>
            </div>
           
            <div className='w-75 mx-auto' id="page-content-wrapper">

               

                <div class=" text-center px-4">

                    <h2 >WELCOME TO DASHBORD</h2>
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
       
    </div >
    );
};

export default Dashboard;