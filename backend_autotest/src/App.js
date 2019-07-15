import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './App.css';

const base = "http://localhost:5000";
const inital_state = {
    "skills": {},
    "courses": {},
    "course_info": {},
    "suggested_course": {}
    }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState(inital_state);
    this.handleClick = this.handleClick.bind(this);
    this.showSkills = this.showSkills.bind(this);
    this.showCourses = this.showCourses.bind(this);
    this.showSuggest = this.showSuggest.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  handleClick(e) {
    let id = e.target.id;
    if (id === "refresh") {
      fetch(base + '/api/skills/')
      .then(response => response.json())
      .then(data => {
        let state = this.state;
        state["skills"] = data;
        this.setState(state);
      });
      fetch(base + '/api/courses/')
      .then(response => response.json())
      .then(data => {
        let state = this.state;
        state["courses"] = data;
        this.setState(state);
      });
      fetch(base + '/api/suggest/',
          {method: 'POST',
           body: ""
          })
      .then(response => response.json())
      .then(data => {
        let state = this.state;
        state["suggested_course"] = data;
        this.setState(state);
      });
      fetch(base + '/api/course/code')
        .then(response => response.json())
        .then(data => {
          let state = this.state;
          state["course_info"] = data;
          this.setState(state);
      });
    } else if (id === "reset") {
      
      this.setState(inital_state);
      console.log(this.state)
    } else {
      console.log(id);
    }
  }


  showSkills() {
    var data = this.state["skills"];
    return (
      <div>
        {JSON.stringify(data, null, 2)}
      </div>      
    )
  }


  showCourses() {
    var data = this.state["courses"];
    return (
      <div>
        {JSON.stringify(data, null, 2)}
      </div>      
    )
  }  


  showSuggest() {
    var data = this.state["suggested_course"];
    return (
      <div>
        {JSON.stringify(data, null, 2)}
      </div>      
    )
  }  
  

  showInfo() {
    var data = this.state["course_info"];
    return (
      <div>
        {JSON.stringify(data, null, 2)}
      </div>      
    )
  }  

  render() {
    return (
      <div>
        <h1 id="backend-api-autotest">Backend API Autotest {' '}</h1>
        <Button id="refresh" color="primary" size="lg" onClick={this.handleClick}>Refresh</Button>{' '}
        <Button id="reset" color="danger" size="lg" onClick={this.handleClick}>Reset</Button>{' '}
        <h2 id="get-the-skills-httplocalhost5000apiskills-get-null">
        Get the skills (http://localhost:5000/api/skills, GET, Null)
        </h2>
        <pre class="hljs"><code><div>
          <this.showSkills />
        </div></code></pre>
        <h2 id="get-the-courses-httplocalhost5000apicourses-get-null">
          Get the courses  (http://localhost:5000/api/courses, GET, Null)
        </h2>
        <pre class="hljs"><code><div>
          <this.showCourses />
        </div></code></pre>
        <h2 id="get-the-suggested-courses-httplocalhost5000apicourses-post-null">
          Get the suggested courses  (http://localhost:5000/api/courses, POST, Null)
        </h2>
        <pre class="hljs"><code><div>
          <this.showSuggest />
        </div></code></pre>
        <h2 id="get-course-information-httplocalhost5000apicoursecode-get-null">
          Get course information (http://localhost:5000/api/course/code, GET, Null)
        </h2>
        <pre class="hljs"><code><div>
          <this.showInfo />
        </div></code></pre>
      </div>
    )
  }
}

export default App;
