import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Whitebrand';
import Getotp from './Getotp';
import './Login.css';

const Login = () => {

    return (
       <div className="login-section">
           <div className="logo">
               <Logo />
           </div>
           <div className="input-section">
                <input type="text" id="input-field" placeholder="+91   Enter phone number" required/>
                <button className="getotp-btn" onClick={handleClick}>GET OTP</button>
           </div>
        </div>
    );

    function handleClick() {
        
        const input = document.getElementById("input-field");
        var phone = '+91 ' +   input.value;
        console.log(phone);

        ReactDOM.render(
            <Getotp phoneNumber={phone} />,
            document.getElementById('root')
        ); 
    }
}

 

export default Login;





