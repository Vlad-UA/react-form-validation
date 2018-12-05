import React from "react";

const InputText = ({labelText, name, placeholder, onChange, defaultValue, error="", type="text"}) => {
    return <div className="form-group">
        <label>
            {labelText}:
            <input type={type} defaultValue={defaultValue} className={"form-control" + (error && " invalid")} name={name} placeholder={placeholder} onChange={onChange}/>
        </label>
        {error &&
        <div className="invalid-feedback">
            {error}
        </div>
        }
    </div>
};

export default InputText;
