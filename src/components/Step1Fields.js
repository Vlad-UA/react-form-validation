import React from "react";
import FieldInput from "./FieldInput";
import InputRadioElement from "./InputRadioElement";

export default class Step1 extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            firstname: '',
            lastname: '',
            password1: '',
            password2: '',
        };
    }

    fieldInputOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, ()=>{console.log(this.state)});
    };

    render() {
        return (
            <React.Fragment>
                <FieldInput labelText="First Name" name="firstname" placeholder="Enter first name" onChange={this.fieldInputOnChange}/>
                <FieldInput labelText="Last Name" name="lastname" placeholder="Enter last name" onChange={this.fieldInputOnChange}/>
                <FieldInput labelText="Password" name="password1" placeholder="Enter password" onChange={this.fieldInputOnChange}/>
                <FieldInput labelText="Repeat Password" name="password2" placeholder="Enter repeat password" onChange={this.fieldInputOnChange}/>
                <label>
                    Gender:
                    <InputRadioElement name="gender" id="male" value="male" labelText="Male" defaultChecked={true}/>
                    <InputRadioElement name="gender" id="female" value="female" labelText="Female"/>
                </label>
            </React.Fragment>
        );
    }
}
