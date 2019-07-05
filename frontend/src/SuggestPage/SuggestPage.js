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
            // <div className="user-preference">
            <Jumbotron className="user-preference">
                <h1 className="display-3">
                    Tell us a little bit about yourself
                </h1>
                <p className="lead">
                    Please tell us a little bit about yourself, so that we could
                    give you the correct recommendations.
                </p>
                <hr className="my-2" />
                <Row className="lead">
                    <Col sm="4">Skills Add the skills you want to learn</Col>
                    <Col md="8">
                        <InputGroup>
                            <Input
                                value={skill}
                                id="skillInput"
                                placeholder="Python"
                                onChange={this.handleChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="success"
                                    id="addSkill"
                                    onClick={this.handleClick}
                                >
                                    Add
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        {/* </CardBody> */}
                        {/* <CardFooter className="text-muted"> */}
                        <ListGroup>
                            <ShowList
                                list={this.state.skills}
                                onRemoveItem={this.onRemoveSkills}
                            />
                            {/* List Example */}
                            {/* <ListGroupItem color="success">Python<Button close /></ListGroupItem>
                            <ListGroupItem color="info">Programming<Button close /></ListGroupItem>
                            <ListGroupItem color="warning">Teamwork<Button close /></ListGroupItem> */}
                        </ListGroup>{" "}
                        {/* </CardFooter> */}
                        {/* </Card>{" "} */}
                    </Col>
                </Row>
                <Row>
                    {/* Courses Card */}
                    <Col sm="4">
                        {/* {" "} */}
                        {/* <Card> */}
                        {/* <CardHeader tag="h3"> */}
                        Courses
                        {/* </CardHeader> */}
                        {/* <CardBody> */}
                        {/* <CardTitle> */}
                        Add the courses you have taken
                        {/* </CardTitle> */}
                    </Col>
                    <Col md="8">
                        <InputGroup>
                            <Input
                                value={course}
                                id="courseInput"
                                placeholder="MA3402"
                                onChange={this.handleChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="danger"
                                    id="addCourse"
                                    onClick={this.handleClick}
                                >
                                    Add
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        {/* </CardBody> */}
                        {/* <CardFooter className="text-muted"> */}
                        {/* {" "} */}
                        <ListGroup>
                            <ShowList
                                list={this.state.courses}
                                onRemoveItem={this.onRemoveCourses}
                            />
                            {/* List Examples */}
                            {/* <ListGroupItem color="info">MA3402<Button close /></ListGroupItem>
                            <ListGroupItem color="warning">DRA1002<Button close /></ListGroupItem>
                            <ListGroupItem color="danger">GEOL3092<Button close /></ListGroupItem> */}
                        </ListGroup>
                        {/* </CardFooter> */}
                        {/* </Card>{" "} */}
                    </Col>
                </Row>
                {/* <Row>
                        <Col sm="4">
                            {" "}
                            <Card>
                                <CardHeader tag="h3">Questionary</CardHeader>
                                <CardBody>
                                    <CardTitle>
                                        Answer the questions below
                                    </CardTitle>
                                    <CardText> </CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    This function is under development
                                </CardFooter>
                            </Card>{" "}
                        </Col>
                    </Row>{" "} */}
                {/* </div> */}
                {/* Margin and Buttons */}
                <p className="lead" />
                <p className="lead">
                    <Button
                        color="primary"
                        id="submitButton"
                        onClick={this.handleClick}
                    >
                        Submit
                    </Button>{" "}
                    <Button
                        color="danger"
                        id="discardButton"
                        onClick={this.handleClick}
                    >
                        Discard
                    </Button>{" "}
                </p>
                {showCourseList && (
                    <CourseList
                        handleClickOnCourseList={this.handleClickOnCourseList}
                        courses={this.state.courses}
                        setCourseInfo={this.props.setCourseInfo}
                    />
                )}
                {/*Course List Page */}

                {/* </div> */}
            </Jumbotron>
        );
    }
}

export default SuggestPage;
