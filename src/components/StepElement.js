import React from "react";

const StepElement = ({stepIndex, stepName, activeStep}) =>{
   return <div className={"step" + (stepIndex === activeStep? " is-active": "" )}>
        <div className="step__marker">{stepIndex}</div>
        <div className="step__title mt-1">{stepName}</div>
    </div>
};

export default StepElement;
