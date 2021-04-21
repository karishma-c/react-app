
import React from 'react';
import './Terms.css';

const PatientCard = (props) => {
    let patient = props.patientdetails ;
    return (
        <div className="details-card">
            <h5 className="name">Name:{patient.name}</h5>
            <h5 className="age">Age:{patient.age}</h5>
            <h5 className="date">Date Visited:{patient.datevisited}</h5>
            <h5 className="program">Program Referred:{patient.programrefered}</h5>
        </div>
    )

}

export default PatientCard;