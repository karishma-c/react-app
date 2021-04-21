import React from 'react';
import ReactDOM from 'react-dom';
import homeIcon from './../images/home.svg';
import mywallet from './../images/wallet.svg';
import myaccount from './../images/account.svg';
import mysettings from './../images/settings.svg';
import signout from './../images/logout.svg';
import Wallet from './Wallet';
import Settings from './Settings';
import Logout from './Logout';
import Account from './Account';
import './Menu.css';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Home from './Home';

const Menubar = (props) => {
    let userexist = props.userexist;
    return (
        <Router>

            <div className="menubar">
                <nav>

                   <span className="close-btn" onClick={addPatient}>X</span>
                   <ul className="nav-links">
                        <li className="nav-items">
                            <Link to="/" onClick={home} ><img src={homeIcon} alt="img" />Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/account" onClick={account} ><img src={myaccount} alt="img" />My Account</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/wallet" onClick={wallet} ><img src={mywallet} alt="img" />My Wallet</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/settings" onClick={settings} ><img src={mysettings} alt="img" />Settings</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/logout" onClick={logout} ><img src={signout} alt="img" />Logout</Link>
                        </li>
                    </ul>
              

                </nav>
            </div>

        </Router>

      );
      function home() {
        ReactDOM.render (
            <Home userexist = {userexist}/>,
            document.getElementById("root")
        )
     }
      function account() {
        ReactDOM.render (
            <Account />,
            document.getElementById("root")
        )
     }

     function wallet() {
        ReactDOM.render (
            <Wallet />,
            document.getElementById("root")
        )
     }

     function settings() {
        ReactDOM.render (
            <Settings />,
            document.getElementById("root")
        )
     }

     function logout() {
        ReactDOM.render (
            <Logout />,
            document.getElementById("root")
        )
     }
    
    function addPatient() {
        ReactDOM.render(
            <Home userexist ={userexist} />,
            document.getElementById("root")
        )
    }

    }
    
export default Menubar;
