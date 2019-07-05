import React, { Component } from "react";
import "./CourseInfo.css";
import { Container, Row, Col, Button } from "reactstrap";
import CourseInfoData from "./CourseInfo.json";

class CourseInfo extends Component {
    render() {
        let COURSEURL =
            "https://www.ntnu.edu/studies/courses/" +
            `${CourseInfoData.courseCode}`;
        let desc = CourseInfoData.courseDesc.replace(/[0-9]./g, "<\n>$& ");
        console.log(desc);
        return (
            <Container fluid={true} className="course-info">
                <Row>
                    <Col md={6} className="course-info-code">
                        {CourseInfoData.courseCode}
                    </Col>
                    <Col md={6} className="course-info-desc">
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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CourseInfo;
