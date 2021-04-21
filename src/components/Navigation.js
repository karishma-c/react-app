import React from 'react';
import ReactDOM from 'react-dom';
import menu from './../images/menu-icon.svg';
import message from './../images/message-notify.svg';
import Menubar from './Menubar';
import './Terms.css';

const Navigation = (props) => {
    let userexist = props.userexist;
    return (
        <div className="navigation">
            <img className="hamburger-menu" src={menu} alt="image" onClick={openMenu} />
            <img className="message-menu" src={message} alt="image" />
        </div>
    )

    function openMenu() {
        ReactDOM.render (
            <Menubar userexist = {userexist} />,
            document.getElementById("root")
        )
    }
}

export default Navigation;