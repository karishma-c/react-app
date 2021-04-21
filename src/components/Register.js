import React from 'react';
import ReactDOM from 'react-dom';
import Termsandconditions from './Termsandconditions';
import './Login.css';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <h1 className="title">Create Your Profile</h1>
            <form className="register-form">
                <label for="input">
                Name:<br></br>
                </label>
                <input type="text" id="name" placeholder="Enter your name"/>
                
                <label>
                Email:<br></br>
                </label>
                <input type="text" id="e-mail" placeholder="Enter your name"/>
               
                <label>
                Medical council:<br></br>
                </label>
                <select id="council-dropdown">
                    <option value="1"> -- Please select -- </option>
                    <option value="option-1">option 1</option>
                    <option value="option-2">option 2</option>
                    <option value="option-3">option 3</option>
                    <option value="option-4">option 4</option>
                </select>
                
                <label>
                Medical registration number:<br></br>
                </label>
                <input type="text" id="reg-num" placeholder="Enter registration number"/>
                
                <label>
                Speciality:<br></br>
                </label>
                <select id="speciality-dropdown">
                    <option value="1"> -- Please select -- </option>
                    <option value="option-1">option 1</option>
                    <option value="option-2">option 2</option>
                    <option value="option-3">option 3</option>
                    <option value="option-4">option 4</option>
                </select>
                
                <button type="button" value="submit" className="register-btn" onClick={acceptTerms}>REGISTER</button>
            </form>
        </div>
    );

    function acceptTerms() {
        ReactDOM.render(
            <Termsandconditions />,
            document.getElementById("root")
        )
    }
}

export default Register;

/* onSubmit={this.handleSubmit}
value={this.state.value}
onChange={this.handleChange}
 value={this.state.value} onChange={this.handleChange}
*/