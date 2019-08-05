import React, { Component } from "react";
import "./CourseInfo.css";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import ErrorComponent from "./ErrorComponent.js";
import TagCloud from "react-tag-cloud";

class CourseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            courseId: null,
            hasError: false
        };
    }
    async componentDidMount() {
        const that = this;
        try {
            const response = await fetch(
                `../api/course/${this.props.match.params.courseId}/`
            );

            const data = await response.json();
            if ("errorMsg" in data) {
                that.setState({
                    hasError: true
                });
            } else {
                this.setState({
                    data: data,
                    courseId: data.courseCode
                });
            }
        } catch (err) {
            this.setState({
                hasError: true
            });
        }
    }

    render() {
        if (this.state.hasError) {
            return <ErrorComponent />;
        }
        return (
            <Container fluid={true} className="course-info">
                {this.state.data && (
                    <Row>
                        <Col md={3} className="course-info-code">
                            {this.state.data.courseCode}
                            <TagCloud
                                className="course-info-cloud"
                                style={{
                                    fontFamily: "sans-serif",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                    color: "#000",
                                    padding: 2,
                                    width: "100%",
                                    height: "200px"
                                }}
                            >
                                {this.state.data.skills.map((val, i) => {
                                    return <div key={i}>{val}</div>;
                                })}
                            </TagCloud>
                        </Col>
                        <Col md={9} className="course-info-desc">
                            {this.state.data.courseDesc
                                .split("<\n>")
                                .map((i, key) => {
                                    return <div key={key}>{i}</div>;
                                })}
                            <Row md={12}>
                                <a
                                    href={`http://www.cse.unsw.edu.au/~cs${this.state.data.courseCode.match(
                                        /\d+/g
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="course-info-url"
                                >
                                    See more Details
                                </a>
                            </Row>
                            <Row className="related-courses-header">
                                Related Courses:
                            </Row>
                            <Row className="course-info-related-courses">
                                {this.state.data.similarCourses
                                    .slice(0, 6)
                                    .map((val, i) => {
                                        return (
                                            <Col md={4} key={i}>
                                                <Card>
                                                    <CardTitle>{val}</CardTitle>
                                                    <a
                                                        href={`http://www.cse.unsw.edu.au/~cs${val.match(
                                                            /\d+/g
                                                        )}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Course Homepage
                                                    </a>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}

export default CourseInfo;
