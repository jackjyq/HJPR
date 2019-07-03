import React from 'react';
import './App.css';
import HomePage from "./HomePage/HomePage"
import Design from "./HomePage/Design"

// HomePage is for the App
// Design is for demostrate the UI
class App extends React.Component {
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
