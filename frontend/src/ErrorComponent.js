import React, { Component } from "react";
import "./ErrorComponent.css";
import ErrorImage from "./x-mark.svg";

class ErrorComponent extends Component {
    render() {
        return (
            <div className="error-component">
                <img src={ErrorImage} alt="cross" />
                There was an error processing your request. Please go to the{" "}
                <a href="/">main page</a> and submit again.
            </div>
        );
    }
}

export default ErrorComponent;
