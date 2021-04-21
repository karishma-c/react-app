import React from 'react';
import ReactDOM from 'react-dom';
import editIcon from './../images/edit-icon.svg';
import Navigation from "./Navigation";
import './Menu.css';

const Account = () => {
    return (
        <div>
            <Navigation />
            <div className="topic">
                <h1 className="title">My Account</h1>
                <img src={editIcon} alt="image" onClick={editDetails} className="edit-img" />
            </div>
            <div className="my-account">
                <div id="doctor-details">
                    <label>
                    Name:
                    </label>
                    <input type="text" id="doctor-name" placeholder="Clinic name"/>
                    <label>
                    Email:
                    </label>
                    <input type="text" id="doctor-email" placeholder="Clinic name"/>Dr.Suman Singh
                    
                    {/* <h4 className="d-name">Name</h4>
                    <h4 id="doctor-name">Dr.Suman Singh</h4>
                    <h4 className="email">Email</h4>
                    <h4 id="doctor-email">drsuman@maasika.in</h4> */}
                    
                    <label>
                    Clinic name:
                    </label>
                    <input type="text" id="clinic-name" placeholder="Clinic name"/>
                    
                    {/* <h4 className="speciality">Speciality</h4>
                    <h4 id="doctor-speciality">OB/GYN</h4> */}
                    
                    <label>
                    Speciality:
                    </label>
                    <input type="text" id="doctor-speciality" placeholder="Clinic name"/>
                    <label>
                    Alternate contact number:
                    </label>
                    <input type="text" id="doctor-phn" placeholder=" +91 "/>
                </div>
                <button type="button" className="save-btn">SAVE</button>
            </div> 
        </div>
      
    )
    
    function editDetails() {
        document.getElementsByClassName("doctor-details").reset();
        let name = document.getElementById('doctor-name');
        
        let email = document.getElementById('doctor-email');
        
        let phone = document.getElementById('p-phone').value;
        if(phone == '')
        {
           alert('input field cannot be empty');
        }
        let age = document.getElementById('p-age').value;
        if(age == '')
        {
           alert('input field cannot be empty');
        }
        let programrefered = document.getElementById('program-dropdown').value;
        if(programrefered == '')
        {
           alert('input field cannot be empty');
        }
        let obj={};
        let date = new Date();

         obj.name = name;
         obj.email = email;
          obj.phone = phone;
          obj.age = age;
          obj.programrefered = programrefered;
          obj.datevisited = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();  ;
          document.getElementById("patientdetails-form").reset();











        // ReactDOM.render (
        //     <Home />,
        //     document.getElementById("root")
        // )
    }
}

export default Account;