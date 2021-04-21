import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import PatientdetailsCard from './PatientdetailsCard';
import Addpatientform from './Addpatientform';
import './Menu.css';

let patientArray = [];

const Home = (props) => {
    let userexist = props.userexist;
    let patient = props.userdetails;

    if(patient)
    {
        patientArray.push(patient);
    }
    return (
        <div>
           <Navigation userexist={userexist}/>
           <div className = 'home'>
                <h1 className="title"> {userexist?'':'No '}Patients Referred</h1>
                <PatientdetailsCard userdetails = {patientArray}/>
                <button type="button" value="submit" className="add-btn" onClick={addPatient}>ADD NEW PATIENT</button>
           </div>
        </div>
    )
    function addPatient() {
        ReactDOM.render (
            <Addpatientform />,
            document.getElementById("root")
        )
    }
    
}

export default Home;