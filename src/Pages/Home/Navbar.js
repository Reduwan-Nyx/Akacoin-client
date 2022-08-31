import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/AKA.coin.png'
const Navbar = () => {
    return (
        <nav className=" navbar sticky-top navbar-expand-lg bg-light">
            <div className="container navbar ">
                <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>

                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">bb</span>
                </button>

                <div className="justify-content-lg-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="_#">Ecosystem</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="buy">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">What is AKO?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="learn">Learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="community">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Dashbord">dashbord</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="_#">Community</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;