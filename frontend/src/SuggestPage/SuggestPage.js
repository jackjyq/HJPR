import React from "react";

import {
    Button,
    Col,
    InputGroup,
    InputGroupAddon,
    Input,
    Jumbotron,
    ListGroup,
    Row,
    Container,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    ModalFooter
} from "reactstrap";
import ShowList from "./ShowList";
import CourseList from "../CourseList/CourseList";
import "./SuggestPage.css";
import Autocomplete from "./Autocomplete";

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
            question: [],
            showCourseList: false,
            modal: false,
            modalMessage: "Looks like you've already added this item."
        };
        this.getData = this.getData.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);
        this.myRef = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDiscard() {
        this.setState({
            skills: [],
            skill: "",
            courses: [],
            course: "",
            question: [],
            showCourseList: false
        });
        this.myRef.current.value = "";
    }
    toggle() {
        this.setState(prevstate => ({
            modalMessage: "Looks like you've already added this item.",
            modal: !prevstate.modal
        }));
    }
    handleSubmit = async () => {
        if (!this.state.courses.length || !this.state.skills.length) {
            this.setState({
                modal: true,
                modalMessage: "Please fill in the required fields"
            });
        } else {
            // const movie = { title, rating };
            const response = await fetch("./api/suggest/bert/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    skills: this.state.skills,
                    courses: this.state.courses,
                    questions: this.myRef.current.value
                })
            });
            if (response.ok) {
                console.log("response worked!");
                // localStorage.setItem("skills", this.state.skills);
                // localStorage.setItem("courses", this.state.courses);
                // localStorage.setItem("questions", this.state.questions);
                window.location.href = "/suggest";
            }
        }
    };
    handleChange(e) {
        const id = e.target.id;
        // if (id === "skillInput") {
        //     this.setState({ skill: e.currentTarget.innerText });
        // } else
        if (id === "courseInput") {
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

    getData(val) {
        const skills = this.state.skills;
        if (!skills.includes(val)) {
            skills.unshift(val);
            this.setState({ skills: skills, skill: "" });
        } else {
            this.setState({
                modal: true,
                modalMessage: "Looks like you've already added this item."
            });
        }
        console.log(this.state);
    }

    handleClick(e) {
        const id = e.target.id;
        // if (id === "discardButton") {
        //     this.props.handleClickOnSuggestPage();
        // } else
        if (id === "submitButton") {
            // console.log(this.state)
            // this.props.handleClickOnSubmit();
            this.setState({ showCourseList: true });
        } else if (id === "addCourse") {
            console.log("discardButton");
            // add course to state

            const courses = this.state.courses;
            if (!courses.includes(this.state.course)) {
                courses.unshift(this.state.course);
                this.setState({ courses: courses, course: "" });
            } else {
                this.setState({
                    modal: true,
                    modalMessage: "Looks like you've already added this item."
                });
            }
            // courses.unshift(this.state.course);
            // this.setState({ courses: courses, course: "" });
        } else if (id === "addSkill") {
            // console.log(this.state);
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
            <Container className="user-preference">
                <h1 className="display-3">
                    Tell us a little bit about yourself
                </h1>
                <p className="lead">
                    Please tell us a little bit about yourself, so that we can
                    fine tune your recommendations.
                    <span>
                        <span className="form-required">*</span> = Required
                        Fields
                    </span>
                </p>
                {/* <hr /> */}

                {/* <hr className="my-2" /> */}
                {/* <Autocomplete /> */}
                <Form>
                    <FormGroup className="lead question" row>
                        {/* <Col sm="4"> */}
                        <Label
                            sm={4}
                            className="span-question"
                            for="skillInput"
                        >
                            Add the skills you want to learn
                            <span className="form-required"> *</span>
                        </Label>
                        {/* </Col> */}
                        <Col sm="8">
                            <InputGroup className="questions-inputs">
                                <Autocomplete
                                    // value={skill}
                                    compID="skillInput"
                                    placeholderAuto="Python"
                                    onChange={this.handleChange}
                                    sendData={this.getData}
                                    // id="autocomplete"
                                />
                                {/* <InputGroupAddon addonType="append">
                                <Button
                                    color="primary"
                                    id="addSkill"
                                    onClick={this.handleClick}
                                >
                                    Add
                                </Button>
                            </InputGroupAddon> */}
                            </InputGroup>
                            <ListGroup className="list-additions">
                                <ShowList
                                    list={this.state.skills}
                                    onRemoveItem={this.onRemoveSkills}
                                />
                            </ListGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup className="lead question" row>
                        {/* <Col sm="4"> */}
                        <Label
                            sm={4}
                            className="span-question"
                            for="courseInput"
                        >
                            Add the courses you have taken
                            <span className="form-required"> *</span>
                        </Label>
                        {/* </Col> */}
                        <Col sm="8">
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
                    </FormGroup>
                    <FormGroup className="lead question" row>
                        {/* <Col sm="4"> */}
                        <Label
                            sm={4}
                            className="span-question"
                            for="exampleText"
                        >
                            Tell us your interests, likes and hobbies
                        </Label>
                        {/* </Col> */}
                        <Col sm="8">
                            <Input
                                type="textarea"
                                name="text"
                                id="exampleText"
                                innerRef={this.myRef}
                                required={true}
                            />
                        </Col>
                    </FormGroup>
                    {/* <p className="lead" /> */}
                    <p className="lead">
                        <Button
                            color="success"
                            id="submitButton"
                            onClick={this.handleSubmit}
                            className="button-questions"
                        >
                            Submit
                        </Button>
                        <Button
                            color="danger"
                            id="discardButton"
                            className="button-questions"
                            onClick={this.handleDiscard}
                        >
                            Discard
                        </Button>
                    </p>
                    {/* {showCourseList && (
                    <CourseList
                        handleClickOnCourseList={this.handleClickOnCourseList}
                        courses={this.state.courses}
                        setCourseInfo={this.props.setCourseInfo}
                    />
                )} */}
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>{this.state.modalMessage}</ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default SuggestPage;
