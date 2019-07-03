import React,  { Component} from 'react';
import HomePage from "./HomePage/HomePage"
import './App.css';
import Design from "./Design"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <Design /> */}
      </div>

    );
  }
}

export default App;
