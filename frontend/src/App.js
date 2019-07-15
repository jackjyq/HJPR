import React, { Component } from "react";
import HomePage from "./HomePage";
import "./App.css";
import Header from "./Header";
import UserPreference from "./UserPreference";
import CourseInfo from "./CourseInfo";
import SuggestPage from "./SuggestPage/SuggestPage";
import RecommendedCoursesPage from "./RecommendedCoursesPage";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <HomePage />
                <SuggestPage />
                {/* <RecommendedCoursesPage /> */}
                {/* <CourseInfo /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
