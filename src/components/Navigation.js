import React from "react";

const Navigation = (props) => {
    function showButtons({activeState, onPreviousButtonClick, onNextButtonClick, onResetButtonClick}) {
        switch (activeState) {
            case 4:
                return <button type="button" className="btn btn-primary" onClick={onResetButtonClick}>Reset</button>;
            default:
                return <React.Fragment>
                    <button type="button" className="btn btn-light mr-4" disabled={activeState === 1}
                            onClick={onPreviousButtonClick}>Previous
                    </button>
                    <button type="button" className="btn btn-secondary" disabled={activeState === 4}
                            onClick={onNextButtonClick}>Next
                    </button>
                </React.Fragment>;
        }
    }

    return (
        <div className="d-flex justify-content-center">
            {showButtons(props)}
        </div>
    );
};

export default Navigation
