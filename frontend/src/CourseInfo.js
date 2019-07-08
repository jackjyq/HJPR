import React, { Component } from "react";
import "./CourseInfo.css";
import { Container, Row, Col, Button, Card, CardTitle } from "reactstrap";
import CourseInfoData from "./CourseInfo.json";

class CourseInfo extends Component {
    render() {
        let COURSEURL =
            "https://www.ntnu.edu/studies/courses/" +
            `${CourseInfoData.courseCode}`;
        let desc = CourseInfoData.courseDesc.replace(/[0-9]./g, "<\n>$& ");
        // console.log(desc);
        let courseCards = CourseInfoData.similarCourses.map((val, i) => {
            let courseCode = "https://www.ntnu.edu/studies/courses/";
            return (
                <Col md={4} key={i}>
                    <Card>
                        <CardTitle>{val}</CardTitle>
                        <a href={courseCode + val} target="_blank">
                            Course Homepage
                        </a>
                    </Card>
                </Col>
            );
        });
        return (
            <Container fluid={true} className="course-info">
                <Row>
                    <Col md={3} className="course-info-code">
                        {CourseInfoData.courseCode}
                    </Col>
                    <Col md={9} className="course-info-desc">
                        {desc.split("<\n>").map((i, key) => {
                            return <div key={key}>{i}</div>;
                        })}
                        <Row md={12}>
                            <a
                                href={COURSEURL}
                                target="_blank"
                                className="course-info-url"
                            >
                                Link to Course
                            </a>
                        </Row>
                        <Row className="related-courses-header">
                            Related Courses:
                        </Row>
                        <Row className="course-info-related-courses">
                            {courseCards}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CourseInfo;
