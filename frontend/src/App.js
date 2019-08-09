import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import CourseInfo from "./CourseInfo";
import RecommendedCoursesPage from "./RecommendedCoursesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/suggest"
                            component={RecommendedCoursesPage}
                        />
                        <Route
                            exact
                            path="/courses/:courseId"
                            component={CourseInfo}
                        />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
