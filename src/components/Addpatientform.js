import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import './Register.css';
import Home from './Home';

const Addpatientform = (props) => {
    
    return (
        <div className="add-patient">
            <span className="close-btn" onClick={goHome}>X</span>
            <h1 className="title">Patient Details</h1>
            <form id="patientdetails-form" className="addpatient-form">
                <label>
                Name:<br></br>
                </label>
                <input type="text" id="p-name" placeholder="Enter patient name"/>
                
                <label>
                Phonenumber:<br></br>
                </label>
                <input type="phone" id="p-phone" placeholder="+91  Enter phonenumber"/>
                
                <label>
                Email:<br></br>
                </label>
                <input type="email" id="p-email" placeholder="Enter patient email"/>
                
                <label>
                Age:<br></br>
                </label>
                <input type="number" id="p-age" placeholder="Enter patient age"/>
                
                <label>
                Program referred:<br></br>
                </label>
                <select id="program-dropdown">
                    <option value="1"> -- Please select -- </option>
                    <option value="option-1">option 1</option>
                    <option value="option-2">option 2</option>
                    <option value="option-3">option 3</option>
                    <option value="option-4">option 4</option>
                </select>
                
                <button type="button" value="submit" className="addpatient-btn" onClick={addPatient.bind(this)}>ADD PATIENT</button>
            </form>
        </div>
    );

    function goHome() {
        ReactDOM.render(
            <Home/>,
            document.getElementById("root")
        )
    }

    function addPatient(e){
        e.preventDefault();
        let name = document.getElementById('p-name').value;
        if(name == '')
        {
           alert('input field cannot be empty');
        }
        let email = document.getElementById('p-email').value;
        if(email == '')
        {
           alert('input field cannot be empty');
        }
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

        let userexist = true;
        
        ReactDOM.render(
            <Home userdetails = {obj} userexist = {userexist} />,
            document.getElementById("root")
        )
    }
};

export default Addpatientform;
