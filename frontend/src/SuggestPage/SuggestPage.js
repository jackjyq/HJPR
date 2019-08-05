import React from "react";

import {
    Button,
    Col,
    InputGroup,
    Input,
    ListGroup,
    Container,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    ModalFooter,
    Spinner
} from "reactstrap";
import ShowList from "./ShowList";
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
            modalMessage: "Looks like you've already added this item.",
            fetching: false,
            selectedOption: "bert"
        };
        this.getData = this.getData.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);
        this.myRef = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.getDataCourses = this.getDataCourses.bind(this);
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
    handleRadioChange(evt) {
        this.setState({
            selectedOption: evt.target.value
        });
    }
    toggle() {
        this.setState(prevstate => ({
            modalMessage: "Looks like you've already added this item.",
            modal: !prevstate.modal
        }));
    }
    handleSubmit = async evt => {
        evt.preventDefault();
        if (!this.state.courses.length || !this.state.skills.length) {
            this.setState({
                modal: true,
                modalMessage: "Please fill in the required fields"
            });
        } else {
            this.setState({
                fetching: true
            });
            const response = await fetch(
                `./api/suggest/${this.state.selectedOption}/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        skills: this.state.skills,
                        courses: this.state.courses,
                        questions: this.myRef.current.value
                    })
                }
            );
            if (response.ok) {
                console.log("response worked!");
                response.text().then(text => {
                    console.log(text);
                    window.localStorage.setItem("data", text);
                    window.location.href = "/suggest";
                });
            } else {
                this.setState({
                    modal: true,
                    modalMessage: "No similar courses found. Please try again.",
                    fetching: false
                });
                this.handleDiscard();
            }
        }
    };
    handleChange(e) {
        const id = e.target.id;
        if (id === "courseInput") {
            this.setState({ course: e.target.value });
        } else {
            console.log("Error in SuggestPage.js ->  handleChange", e);
        }
    }

    onRemoveSkills(index) {
        const skills = this.state.skills;
        skills.splice(index, 1);
        this.setState({ skills: skills });
    }

    onRemoveCourses(index) {
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
    }
    getDataCourses(val) {
        const courses = this.state.courses;
        if (!courses.includes(val)) {
            courses.unshift(val);
            this.setState({ courses: courses, course: "" });
        } else {
            this.setState({
                modal: true,
                modalMessage: "Looks like you've already added this item."
            });
        }
    }

    handleClick(e) {
        const id = e.target.id;
        if (id === "submitButton") {
            this.setState({ showCourseList: true });
        } else if (id === "addCourse") {
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
        } else if (id === "addSkill") {
            const skills = this.state.skills;
            skills.unshift(this.state.skill);
            this.setState({ skills: skills, skill: "" });
        } else {
            console.log("Error in SuggestPage.js -> handleClick", e);
        }
    }

    render() {
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
                <Form>
                    <FormGroup className="lead question" row>
                        <Label
                            sm={4}
                            className="span-question"
                            for="skillInput"
                        >
                            Add the skills you want to learn
                            <span className="form-required"> *</span>
                        </Label>
                        <Col sm="8">
                            <InputGroup className="questions-inputs">
                                <Autocomplete
                                    compID="skillInput"
                                    placeholderAuto="Start typing the skills..."
                                    onChange={this.handleChange}
                                    sendData={this.getData}
                                    callingAPI="skills"
                                />
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
                        <Label
                            sm={4}
                            className="span-question"
                            for="courseInput"
                        >
                            Add the courses you have taken
                            <span className="form-required"> *</span>
                        </Label>
                        <Col sm="8">
                            <InputGroup className="questions-inputs">
                                <Autocomplete
                                    compID="courseInput"
                                    placeholderAuto="Start typing the course..."
                                    onChange={this.handleChange}
                                    sendData={this.getDataCourses}
                                    callingAPI="courses"
                                />
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
                        <Label
                            sm={4}
                            className="span-question"
                            for="exampleText"
                        >
                            Tell us your interests, likes and hobbies
                        </Label>
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
                    <FormGroup tag="fieldset" className="user-input-radio">
                        <legend>Select the model:</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    value="bert"
                                    name="radio1"
                                    onChange={this.handleRadioChange}
                                    checked={
                                        this.state.selectedOption === "bert"
                                    }
                                />{" "}
                                Use Bert Model
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    value="rakegensim"
                                    onChange={this.handleRadioChange}
                                    name="radio1"
                                    checked={
                                        this.state.selectedOption ===
                                        "rakegensim"
                                    }
                                />{" "}
                                Use RakeGensim Model
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    {this.state.fetching && (
                        <Spinner
                            style={{ width: "4rem", height: "4rem" }}
                            color="primary"
                            type="grow"
                        />
                    )}
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
