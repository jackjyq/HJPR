import React, { Component } from "react";
import HomePage from "./HomePage";
import "./App.css";
import UserPreference from "./UserPreference";
import CourseInfo from "./CourseInfo";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <HomePage /> */}
                {/* <UserPreference /> */}
                <CourseInfo />
            </div>
        );
    }
}

export default App;
