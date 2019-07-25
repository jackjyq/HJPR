import React, { Component } from "react";
import "./RecommendedCoursesPage.css";
import DonutChart from "react-donut-chart";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
// import recommendedCourses from "./recommendedCourses.json";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

class RecommendedCoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseArray: null,
            allCourses: null,
            activeCourse: null,
            activeDesc: null,
            hasError: false
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverDonut = this.handleHoverDonut.bind(this);
    }
    renderData() {
        // fetch("./api/suggest/bert/").then(response => {
        //     response.json().then(data => {
        // let courseArray = localStorage.getItem("data");
        // let allCourses = {};
        // let recommended = [];
        // console.log(courseArray);
        // courseArray.courses.map(val => {
        //     recommended.push(val.label);
        //     allCourses[val.label] = val.desc;
        // });
        // let activeCourse = recommended[0];
        // this.setState({
        //     courses: courseArray,
        //     allCourses: allCourses,
        //     activeCourse: activeCourse,
        //     activeDesc: allCourses[activeCourse]
        // });
        //     });
        // });
        // debugger;

        let courseArray = JSON.parse(window.localStorage.getItem("data"));
        let allCourses = {};
        let recommended = [];
        // console.log(courseArray.courses);
        if (courseArray === null) {
            this.setState({
                hasError: true
            });
        } else {
            courseArray.courses.map(val => {
                recommended.push(val.label);
                allCourses[val.label] = val.desc;
            });
            let activeCourse = recommended[0];
            this.setState({
                coursesArray: courseArray.courses,
                allCourses: allCourses,
                activeCourse: activeCourse,
                activeDesc: allCourses[activeCourse]
            });
            window.localStorage.removeItem("data");
        }
    }
    componentWillMount() {
        this.renderData();
    }
    handleHover(evt) {
        let activeCourse = evt.currentTarget.dataset.course;
        this.setState({
            activeCourse: activeCourse,
            activeDesc: this.state.allCourses[activeCourse]
        });
    }
    handleHoverDonut(item) {
        // console.log(item);
        let activeCourse = item.label;
        let desc = item.desc;
        this.setState({
            activeCourse: activeCourse,
            activeDesc: desc
        });
    }
    render() {
        if (this.state.hasError) {
            return <ErrorComponent />;
        }
        // debugger;
        // console.log(typeof this.state.allCourses);
        let courseURL = "/courses/";
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="5" className="recommended-courses">
                        <div className="recommended-courses-header">
                            Here is a list of Recommended Courses for you:
                        </div>
                        {this.state.coursesArray &&
                            this.state.coursesArray.map((val, i) => {
                                return (
                                    <Col
                                        md={12}
                                        key={i}
                                        onMouseEnter={this.handleHover}
                                        data-course={val.label}
                                    >
                                        <Card
                                            href={courseURL + val.label}
                                            className="course-card"
                                        >
                                            <CardTitle>{val.label}</CardTitle>
                                            <Link
                                                to={"courses/" + val.label}
                                                target="_blank"
                                                className="course-link"
                                            >
                                                Know More
                                            </Link>
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Col>
                    <Col md="7" className="recommended-courses-chart">
                        <div>
                            <DonutChart
                                data={this.state.coursesArray}
                                height={400}
                                width={400}
                                innerRadius={0.5}
                                // legend={false}
                                strokeColor="#ffffff"
                                onClick={item =>
                                    (window.location.href =
                                        courseURL + item.label)
                                }
                                onMouseEnter={this.handleHoverDonut}
                            />
                        </div>
                        <div className="recommended-courses-desc">
                            {this.state.activeDesc}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RecommendedCoursesPage;
