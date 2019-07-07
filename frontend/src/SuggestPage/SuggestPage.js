import React from "react";

import {
    Button,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardFooter,
    CardHeader,
    Col,
    InputGroup,
    InputGroupAddon,
    Input,
    Jumbotron,
    ListGroup,
    Row
} from "reactstrap";
import ShowList from "./ShowList";
import CourseList from "../CourseList/CourseList";
import "./SuggestPage.css";

class SuggestPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onRemoveSkills = this.onRemoveSkills.bind(this);
        this.onRemoveCourses = this.onRemoveCourses.bind(this);
        this.handleClickOnCourseList = this.handleClickOnCourseList.bind(this);
        this.state = {
            skills: [],
            skill: "",
            courses: [],
            course: "",
            qustionary: [],
            showCourseList: false
        };
    }

    handleChange(e) {
        const id = e.target.id;
        if (id === "skillInput") {
            this.setState({ skill: e.target.value });
        } else if (id === "courseInput") {
            this.setState({ course: e.target.value });
        } else {
            console.log("Error in SuggestPage.js ->  handleChange", e);
        }
    }

    onRemoveSkills(index) {
        // console.log(index)
        const skills = this.state.skills;
        skills.splice(index, 1);
        this.setState({ skills: skills });
    }

    onRemoveCourses(index) {
        // console.log(index)
        const courses = this.state.courses;
        courses.splice(index, 1);
        this.setState({ courses: courses });
    }

    handleClickOnCourseList() {
        this.setState({ showCourseList: false });
    }

    handleClick(e) {
        const id = e.target.id;
        if (id === "discardButton") {
            this.props.handleClickOnSuggestPage();
        } else if (id === "submitButton") {
            // console.log(this.state)
            // this.props.handleClickOnSubmit();
            this.setState({ showCourseList: true });
        } else if (id === "addCourse") {
            // add course to state
            const courses = this.state.courses;
            courses.unshift(this.state.course);
            this.setState({ courses: courses, course: "" });
        } else if (id === "addSkill") {
            const skills = this.state.skills;
            skills.unshift(this.state.skill);
            this.setState({ skills: skills, skill: "" });
        } else {
            console.log("Error in SuggestPage.js -> handleClick", e);
        }
    }

    render() {
        const skill = this.state.skill;
        const course = this.state.course;
        const showCourseList = this.state.showCourseList;
        return (
            <Jumbotron className="user-preference">
                <h1 className="display-3">
                    Tell us a little bit about yourself
                </h1>
                <p className="lead">
                    Please tell us a little bit about yourself, so that we can
                    fine tune your recommendations.
                </p>
                {/* <hr className="my-2" /> */}
                <Row className="lead question">
                    <Col sm="4">
                        <span className="span-question">
                            Add the skills you want to learn
                        </span>
                    </Col>
                    <Col md="8">
                        <InputGroup className="questions-inputs">
                            <Input
                                value={skill}
                                id="skillInput"
                                placeholder="Python"
                                onChange={this.handleChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="primary"
                                    id="addSkill"
                                    onClick={this.handleClick}
                                >
                                    Add
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <ListGroup className="list-additions">
                            <ShowList
                                list={this.state.skills}
                                onRemoveItem={this.onRemoveSkills}
                            />
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="lead question">
                    <Col sm="4">
                        <span className="span-question">
                            Add the courses you have taken
                        </span>
                    </Col>
                    <Col md="8">
                        <InputGroup className="questions-inputs">
                            <Input
                                value={course}
                                id="courseInput"
                                placeholder="MA3402"
                                onChange={this.handleChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="primary"
                                    id="addCourse"
                                    onClick={this.handleClick}
                                >
                                    Add
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <ListGroup className="list-additions">
                            <ShowList
                                list={this.state.courses}
                                onRemoveItem={this.onRemoveCourses}
                            />
                        </ListGroup>
                    </Col>
                </Row>
                {/* <p className="lead" /> */}
                <p className="lead">
                    <Button
                        color="success"
                        id="submitButton"
                        onClick={this.handleClick}
                        className="button-questions"
                    >
                        Submit
                    </Button>
                    <Button
                        color="danger"
                        id="discardButton"
                        onClick={this.handleClick}
                        className="button-questions"
                    >
                        Discard
                    </Button>
                </p>
                {showCourseList && (
                    <CourseList
                        handleClickOnCourseList={this.handleClickOnCourseList}
                        courses={this.state.courses}
                        setCourseInfo={this.props.setCourseInfo}
                    />
                )}
            </Jumbotron>
        );
    }
}

export default SuggestPage;
