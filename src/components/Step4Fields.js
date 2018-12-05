import React from "react";

export default class Step4Fields extends React.Component {
    render() {
        const {fields:{avatar, firstname, lastname, email, mobile, country, city} } = this.props;
        return (
            <React.Fragment>
                <div className="row mb-4">
                    <div className="col-4">
                        <img width="100%" src={avatar} alt=""/>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <h4>{`${firstname} ${lastname}`}</h4>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12">
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Mobile:</strong> {mobile}</p>
                        <p><strong>Location:</strong> {country + ' ' + city}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
