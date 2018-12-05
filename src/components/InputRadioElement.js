import React from "react";

export default class InputRadioElement extends React.Component {
    render() {
        const {name, value, labelText, id, defaultChecked, onClick} = this.props;
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={id} value={value} defaultChecked={defaultChecked} onClick={onClick}/>
                <label className="form-check-label" htmlFor={id}>{labelText}</label>
            </div>
        );
    }
}
