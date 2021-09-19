import React, { Component } from "react";
import './style.css';

class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            cName: "",
            mNumber: "",
            gName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.fName + " " + this.state.lName + " Your Registration is successfully Done..");
        event.preventDefault();
    };



    render() {
        return (
            <div>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <label className="label">First Name = </label>
                            <input className='input-field' placeholder='YOUR NAME' type="text" name="fName" value={this.state.fName} onChange={this.handleChange} /><br />
                        <label className="label">Last Name = </label>
                            <input className='input-field' placeholder='YOUR LAST NAME' type="text" name="lName" value={this.state.lName} onChange={this.handleChange} /><br />
                        <label className="label">City Name = </label>
                            <input className='input-field' placeholder='YOUR CITY NAME' type="text" name="cName" value={this.state.cName} onChange={this.handleChange} /><br />
                        <label className="label">GENDER = </label>
                            <input className='input-field-gen' type="radio" name="gName" value="male" onChange={this.handleChange} />Male
                            <input type="radio" name="gName" value="female" onChange={this.handleChange} />Female
                            <input type="radio" name="gName" value="other" onChange={this.handleChange} />Other<br />
                        <label className="label">Mobile number = </label>
                            <input className='input-field' placeholder='YOUR NUMBER' type="text" name="mNumber" value={this.state.mNumber} onChange={this.handleChange} /><br />
                        <input className="submit-btn" type="Submit" value="Submit" />
                    </form>
                </fieldset>
            </div>
        );
    };
};

export default ControlledForm;