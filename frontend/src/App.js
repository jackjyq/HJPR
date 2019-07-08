import React, { Component } from "react";
import HomePage from "./HomePage";
import "./App.css";
import UserPreference from "./UserPreference";
import CourseInfo from "./CourseInfo";
import SuggestPage from "./SuggestPage/SuggestPage";
import RecommendedCoursesPage from "./RecommendedCoursesPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <HomePage /> */}
                {/* <SuggestPage /> */}
                {/* <CourseInfo /> */}
                <RecommendedCoursesPage />
            </div>
        );
    }
}

export default App;
