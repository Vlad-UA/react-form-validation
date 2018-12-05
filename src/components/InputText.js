import React from "react";

const FieldInput = ({labelText, name, placeholder, onChange}) => {
    return <div className="form-group">
        <label>
            {labelText}:
            <input type="text" className="form-control" name={name} placeholder={placeholder} onChange={onChange}/>
        </label>
    </div>
};

export default FieldInput;
