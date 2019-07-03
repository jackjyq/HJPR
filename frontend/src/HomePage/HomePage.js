import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./HomePage.css";
import logo from '../statics/logo.svg'
import BrowsePage from "../BrowsePage/BrowsePage.js"
import SuggestPage from '../SuggestPage/SuggestPage'
import CourseInfo from '../CourseInfo/CourseInfo'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showBrowse: false,
                      showSuggest: false,
                      courseInfo: ""
                     };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOnBrowsePage = this.handleClickOnBrowsePage.bind(this);
        this.handleClickOnSuggestPage = this.handleClickOnSuggestPage.bind(this);
        this.handleClickOnCourseList = this.handleClickOnCourseList.bind(this);
        this.handleClickOnCourseInfo = this.handleClickOnCourseInfo.bind(this);
        this.setCourseInfo = this.setCourseInfo.bind(this);
        // this.handleClickOnSubmit = this.handleClickOnSubmit.bind(this);
    }

    handleClick(e) {
        // console.log(e.target.id)
        if (e.target.id === "browseButton") {
            if (this.state.showBrowse) {
                this.setState({showBrowse: false})
            } else {
                this.setState({showBrowse: true})
            }  
        } else if (e.target.id === "suggestButton") {
            if (this.state.showSuggest) {
                this.setState({showSuggest: false})
            } else {
                this.setState({showSuggest: true})
            }
        } else {
            console.log("Error in Homepage.js -> handleClick", e)
        }
    }

    handleClickOnBrowsePage () {
        this.setState({showBrowse: false})
    }

    handleClickOnSuggestPage () {
        this.setState({showSuggest: false})
    }
    
    handleClickOnCourseList () {
        this.setState({showCourseList: false})
    }

    handleClickOnCourseInfo() {
        this.setState({courseInfo: ""})
    }

    setCourseInfo () {
        this.setState({courseInfo: this.props.course})
        console.log(this.state.courseInfo)
    }
    // handleClickOnSubmit () {
    //     this.setState({showCourseList: true})
    // }

    render() {
        const showBrowse = this.state.showBrowse
        const showSuggest = this.state.showSuggest
        const showCourseList = this.state.showCourseList
        const courseInfo = this.state.courseInfo
        return (
            <div>
            <Jumbotron id="homePage">
                <h1 className="display-3">
                    <img src={logo} className="App-logo" alt="logo" />
                </h1>
                <p className="lead">The aim of HJPR project is to build a Course Recommender System based on user preferences, including:</p>
                <hr className="my-2" />
                <ul>
                    <li>The courses which user has taken before</li>
                    <li>The skills which user wants to learn</li>
                    <li>The answers from a set of questions</li>
                </ul>
                <p className="lead">
                    <Button color="success" id="browseButton" onClick={this.handleClick}>Browse</Button>{' '}
                    <Button color="primary" id="suggestButton" onClick={this.handleClick}>Suggest</Button>
                </p>
            </Jumbotron>
            {showBrowse &&
                <BrowsePage handleClickOnBrowsePage={this.handleClickOnBrowsePage} />
            }
            {showSuggest &&
                <SuggestPage
                    handleClickOnSuggestPage={this.handleClickOnSuggestPage}
                    setCourseInfo={this.setCourseInfo}
                    />
            }
            {(courseInfo !== "") &&
                <CourseInfo 
                    handleClickOnCourseInfo={this.handleClickOnCourseInfo}
                    course={courseInfo}
                />
            }
            </div>
        )
    }
}

export default HomePage;