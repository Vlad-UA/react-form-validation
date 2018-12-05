import React from "react";
import Step1Fields from "./Step1Fields";
import Step2Fields from "./Step2Fields";
import Step3Fields from "./Step3Fields";
import Step4Fields from "./Step4Fields";
import StepsIndicator from "./StepsIndicator";
import Navigation from "./Navigation";
import CountriesData from "../data/countries";
import CitiesData from "../data/cities";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getStateDefaultValues();
    }

    getStateDefaultValues = () => {
        return {
            activeStep: 1,
            fields: {
                firstname: 'f2rf2rf',
                lastname: '2erf2erf2',
                password: '123456',
                repeatPassword: '123456',
                gender: 'male',
                email: 'sdfsdk@gmail.com',
                mobile: '1234567',
                country: '1',
                city: '0',
                avatar: '',
            },
            errors: {
                firstname: '',
                lastname: '',
                password: '',
                repeatPassword: '',
                email: '',
                mobile: '',
                city: '',
                avatar: '',
            }
        };
    };

    inputOnChange = (event) => {
        event.persist();

        this.setState(prevState => (
                {
                    fields:
                        {
                            ...prevState.fields,
                            [event.target.name]: event.target.value
                        }
                }
            )
        );
    };

    onChangeAvatar = (fileBase64) => {
        this.setState(prevState => (
                {
                    fields:
                        {
                            ...prevState.fields,
                            avatar: fileBase64
                        }
                }
            )
        );
    };

    onNextButtonClick = () => {
        const errors = {};

        switch (this.state.activeStep) {
            case 1:
                if (this.state.fields.firstname.length < 5) {
                    errors.firstname = 'Must be 5 characters or more';
                }

                if (this.state.fields.lastname.length < 5) {
                    errors.lastname = 'Must be 5 characters or more';
                }

                if (this.state.fields.password.length < 6) {
                    errors.password = 'Must be 6 characters or more';
                }

                if (this.state.fields.repeatPassword !== this.state.fields.password) {
                    errors.repeatPassword = 'Must be equal password';
                }

                this.setState({errors});
                if (Object.keys(errors).length === 0) {
                    this.setState({activeStep: 2});
                }
                break;

            case 2:
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(this.state.fields.email)) {
                    errors.email = 'Invalid email address';
                }

                if (isNaN(this.state.fields.mobile) || this.state.fields.mobile.length < 5) {
                    errors.mobile = 'Invalid mobile number';
                }

                if (this.state.fields.city === '0') {
                    errors.city = 'Required';
                }

                this.setState({errors});
                if (Object.keys(errors).length === 0) {
                    this.setState({activeStep: 3});
                }
                break;
            case 3:

                if (this.state.fields.avatar === '') {
                    errors.avatar = 'Required';
                }

                this.setState({errors});
                if (Object.keys(errors).length === 0) {
                    this.setState({activeStep: 4});
                }
                break;
            default :
                break;
        }


    };

    onPreviousButtonClick = () => {
        this.setState(prevState => ({activeStep: prevState.activeStep - 1}));
    };

    onResetButtonClick = () => {
        this.setState(this.getStateDefaultValues());
    };

    render() {
        const {activeStep} = this.state;
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <StepsIndicator activeStep={activeStep}/>
                    {(activeStep === 1) && <Step1Fields inputOnChange={this.inputOnChange} fields={this.state.fields}
                                                        errors={this.state.errors}/>}
                    {(activeStep === 2) && <Step2Fields countriesData={CountriesData} citiesData={CitiesData}
                                                        inputOnChange={this.inputOnChange} fields={this.state.fields}
                                                        errors={this.state.errors}/>}
                    {(activeStep === 3) && <Step3Fields onChangeAvatar={this.onChangeAvatar} fields={this.state.fields}
                                                        errors={this.state.errors}/>}
                    {(activeStep === 4) && <Step4Fields fields={this.state.fields}/>}
                    <Navigation activeState={this.state.activeStep} onNextButtonClick={this.onNextButtonClick}
                                onPreviousButtonClick={this.onPreviousButtonClick}
                                onResetButtonClick={this.onResetButtonClick}/>
                </form>
            </div>
        );
    }
}
