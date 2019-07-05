import React, { Component } from "react";
import HomePage from "./HomePage";
import "./App.css";
import UserPreference from "./UserPreference";
import CourseInfo from "./CourseInfo";
import SuggestPage from "./SuggestPage/SuggestPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomePage />
                {/* <UserPreference /> */}
                <SuggestPage />
                {/* <CourseInfo /> */}
            </div>
        );
    }
}

export default App;
