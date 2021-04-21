import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './Terms.css';
import PatientCard from './Patientcard';


const PatientdetailsCard = (props) => {
    let patientdetails = props.userdetails;
    return (
        <div className="card-container">
            {patientdetails.map((patient) => 
                <PatientCard patientdetails ={patient}></PatientCard>
             )}
        </div>
    )
}

export default PatientdetailsCard;
