import React from "react";
import InputText from "./InputText";

export default class Step2Fields extends React.Component {

    getCountries = items => {
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    getCities = (country, citiesAll) => {
        const citiesInCountry = [{key: '0', name: 'Select City'}];

        Object.keys(citiesAll).forEach((key) => {
                if (citiesAll[key].country === Number(country)) {
                    citiesInCountry.push({key, name: citiesAll[key].name});
                }
            }
        );

        return citiesInCountry.map(item => (
                <option key={item.key} value={item.key}>
                    {item.name}
                </option>
            ));
    };


    render() {
        const {inputOnChange, fields, errors, countriesData, citiesData} = this.props;
        return (
            <React.Fragment>
                <InputText labelText="Email" name="email" placeholder="Enter email" defaultValue={fields.email}
                           onChange={inputOnChange} error={errors.email}/>
                <InputText labelText="Mobile" name="mobile" placeholder="Enter mobile" defaultValue={fields.mobile}
                           onChange={inputOnChange} error={errors.mobile}/>

                <div className="form-group">
                    <label>
                        Country:
                        <select
                            className="form-control"
                            id="country"
                            name="country"
                            value={fields.country}
                            onChange={inputOnChange}
                        >
                            {this.getCountries(countriesData)}
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Cities:
                        <select
                            className={"form-control" + (errors.city ? " invalid" : "")}
                            id="city"
                            name="city"
                            value={fields.city}
                            onChange={inputOnChange}
                        >
                            {this.getCities(fields.country, citiesData)}
                        </select>
                    </label>
                    {errors.city &&
                    <div className="invalid-feedback">
                        {errors.city}
                    </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}
