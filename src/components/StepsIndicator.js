import React from "react";
import StepElement from "./StepElement";

export default class StepsIndicator extends React.Component {
    render() {
        const {activeStep} = this.props;
        return (
            <div className="steps mb-4">
                <StepElement stepIndex={1} stepName={"Basic"} activeStep={activeStep} />
                <StepElement stepIndex={2} stepName={"Contacts"} activeStep={activeStep} />
                <StepElement stepIndex={3} stepName={"Avatar"} activeStep={activeStep} />
                <StepElement stepIndex={4} stepName={"Finish"} activeStep={activeStep} />
            </div>
        );
    }
}
