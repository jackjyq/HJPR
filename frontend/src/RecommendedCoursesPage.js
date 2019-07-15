import React, { Component } from "react";
import "./RecommendedCoursesPage.css";
import DonutChart from "react-donut-chart";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import recommendedCourses from "./recommendedCourses.json";

class RecommendedCoursesPage extends Component {
    constructor(props) {
        super(props);
        let courseArray = recommendedCourses.courses;
        let allCourses = {};
        let recommended = [];
        courseArray.map(val => {
            recommended.push(val.label);
            allCourses[val.label] = val.desc;
        });
        let activeCourse = recommended[0];
        this.state = {
            allCourses: allCourses,
            activeCourse: activeCourse,
            activeDesc: allCourses[activeCourse].replace(/[0-9]./g, "<\n>$& ")
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverDonut = this.handleHoverDonut.bind(this);
    }
    handleHover(evt) {
        let activeCourse = evt.currentTarget.dataset.course;
        this.setState({
            activeCourse: activeCourse,
            activeDesc: this.state.allCourses[activeCourse]
        });
    }
    handleHoverDonut(item) {
        console.log(item);
        let activeCourse = item.label;
        let desc = item.desc;
        this.setState({
            activeCourse: activeCourse,
            activeDesc: desc
        });
    }
    render() {
        let courseURL = "/courses/";
        let coursesList = recommendedCourses.courses.map((val, i) => {
            return (
                <Col
                    md={12}
                    key={i}
                    onMouseEnter={this.handleHover}
                    data-course={val.label}
                >
                    <Card href={courseURL + val.label} className="course-card">
                        <CardTitle>{val.label}</CardTitle>
                        <a
                            href={courseURL + val.label}
                            target="_blank"
                            className="course-link"
                        >
                            Know More
                        </a>
                    </Card>
                </Col>
            );
        });
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="5" className="recommended-courses">
                        <div className="recommended-courses-header">
                            Here is a list of Recommended Courses for you:
                        </div>
                        {coursesList}
                    </Col>
                    <Col md="7" className="recommended-courses-chart">
                        <div>
                            <DonutChart
                                data={recommendedCourses.courses}
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
