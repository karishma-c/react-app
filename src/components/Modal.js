import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import App from './../App';
import Menubar from './Menubar';
import './Modal.css';

const Modal = () => {
    return (
        <div>
           <div className="modal">
               <div className="modal-content">
                   <span className="close" onClick={goBack}>X</span>
                   <h3 className="main-content">Do you want to Logout?</h3>
                   <div className="button-section">
                       <button type="button" className="logout-btn" onClick={confirmLogout}>Logout</button>
                       <button type="button" className="cancel-btn" onClick={cancelLogout}>Cancel</button>
                   </div>
               </div>
           </div>
        </div>
    )

    function goBack() {
        ReactDOM.render (
            <Menubar />,
            document.getElementById("root")
        )
    }

    function confirmLogout() {
        ReactDOM.render (
            <App />,
            document.getElementById("root")
        )
    }
 
    function cancelLogout() {
         ReactDOM.render (
            <Home />,
            document.getElementById("root")
         )
    }
}    

export default Modal;