import React from "react";
import InputText from "./InputText";
import InputRadioElement from "./InputRadioElement";

export default class Step1Fields extends React.Component {
    render() {
        const {inputOnChange, fields, errors} = this.props;
        return (
            <React.Fragment>
                <InputText labelText="First Name" name="firstname" placeholder="Enter first name"
                           defaultValue={fields.firstname}
                           onChange={inputOnChange} error={errors.firstname}/>
                <InputText labelText="Last Name" name="lastname" placeholder="Enter last name"
                           defaultValue={fields.lastname}
                           onChange={inputOnChange} error={errors.lastname}/>
                <InputText labelText="Password" type="password" name="password" placeholder="Enter password"
                           defaultValue={fields.password}
                           onChange={inputOnChange} error={errors.password}/>
                <InputText labelText="Repeat Password" type="password" name="repeatPassword"
                           placeholder="Enter repeat password" defaultValue={fields.repeatPassword}
                           onChange={inputOnChange} error={errors.repeatPassword}/>
                <div className="form-group">
                    <label>
                        Gender:
                        <InputRadioElement name="gender" id="male" value="male" labelText="Male"
                                           defaultChecked={fields.gender === "male"} onClick={inputOnChange}/>
                        <InputRadioElement name="gender" id="female" value="female" labelText="Female"
                                           defaultChecked={fields.gender === "female"} onClick={inputOnChange}/>
                    </label>
                </div>
            </React.Fragment>
        );
    }
}
