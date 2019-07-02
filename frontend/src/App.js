import React, { Component } from "react";
import HomePage from "./HomePage";
import "./App.css";
import UserPreference from "./UserPreference";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomePage />
                <UserPreference />
            </div>
        );
    }
}

export default App;
