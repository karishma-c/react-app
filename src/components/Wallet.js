import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import rupees from './../images/rupees.svg';
import './Menu.css';

const Wallet = () => {
    return (
       <div>
           <Navigation />
           <div className="my-wallet">
                <h1 className="title">My Wallet</h1>
                <div className="card-container">
                    <div className="totalearning-card">
                        <p className="total-earning">Your total earning</p>
                        <h1 className="total-cash"><img src={rupees} alt="image" />24,000</h1>
                    </div>
                    <div className="paidout-card">
                        <p className="paidout">Paidout</p>
                        <h1 className="paidout-cash"><img src={rupees} alt="image" />18,000</h1>
                    </div>
                    <div className="patientsreferred-card">
                        <p className="patients-referred">Number of patients referred</p>
                        <h1 className="referredpatients-count">42</h1>
                    </div>
                </div>
                <button type="button" className="cashout-btn">CASHOUT</button>
           </div>
       </div>
    )
}

export default Wallet;