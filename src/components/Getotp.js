import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Whitebrand';
import Register from './Register';
import './Login.css';

const Getotp = (props) => {
    return (
        <div className="otp-section" onLoad={changeTimer}>
            <div className="logo">
               <Logo />
            </div>
            <div className="get-otp">
                <h3 className="phone">{props.phoneNumber}</h3>
                <div className="otp-number">
                    <div className="num1"></div>
                    <div className="num2"></div>
                    <div className="num3"></div>
                    <div className="num4"></div>
                </div>
            </div>
            <button className="verify-btn" onClick={showForm}>VERIFY OTP</button>
            <div className="go-back">
                <a href="#" className="goback-link">Back</a>
                <p className="timer" >00.59</p>
            </div>
        </div>
    );

    function changeTimer() {
        var time = document.getElementsByClassName("timer");
        var changeTime = time.innerHTML;
        console.log(changeTime);
    }

    function showForm() {
        ReactDOM.render(
            <Register />,
            document.getElementById("root")
        );
    }
}

export default Getotp;