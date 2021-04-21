import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Bluebrand';
import Home from './Home';
import './Terms.css';

const TermsandConditions = () => {
    return (
        <div className="Body">
            <div className="terms-section">
                <div className="logo-blue">
                <Logo />
                </div>
                <h1 className="title">Terms & conditions</h1>
                <div className="terms">
                    <ul className="terms-conditions">
                        <li className="conditions">Once the doctors onboard the
                            maasika patient care app, they will
                            have to submit, minimum of 50 patient
                            data per month to activate their
                            recurring payout from maasika.
                        </li>
                        <li className="conditions">
                            If a docplexus member submits less
                            than 100 patient data per month,
                            Maasika pays 1% total transaction fees
                            to docplexus from that doctor's transaction.
                        </li>
                    </ul>
                </div>
                <div className="agreement">
                    <input name="isGoing" id="check-box" type="checkbox" />
                    <h3 className="agree">I have read the terms & conditions and agree to it</h3>
                </div>
                <button className="continue-btn" onClick={activateAccount}>CONTINUE</button>
            
            </div>
        </div>
    );

    function activateAccount() {
        ReactDOM.render (
           <Home />,
           document.getElementById("root")
        )
    }

    
}

export default TermsandConditions;