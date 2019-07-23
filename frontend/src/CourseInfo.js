import React, { Component } from "react";
import "./CourseInfo.css";
import { Container, Row, Col, Button, Card, CardTitle } from "reactstrap";
// import CourseInfoData from "./CourseInfo.json";

class CourseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            courseId: null
        };
        // console.log(this.state.courseId);
    }
    // renderData() {
    //     fetch("./api/course/TSMA2004/").then(response => {
    //         response.json().then(data => {
    //             console.log(data);
    //             this.setState({
    //                 data: data,
    //                 courseId: data.courseCode
    //             });
    //         });
    //     });
    // }
    async componentDidMount() {
        // this.renderData();
        const response = await fetch("../api/course/TSMA2004/");
        const data = await response.json();
        this.setState({
            data: data,
            courseId: data.courseCode
        });
    }
    render() {
        console.log(this.props.match.params.courseId);
        if (this.props.match.params.courseId !== this.state.courseId) {
            console.log("Errrrrrrrrr");
        }
        // const CourseInfoData = this.state.data;
        // let COURSEURL =
        //     "https://www.ntnu.edu/studies/courses/" +
        //     `${CourseInfoData.courseCode}`;
        // let desc = CourseInfoData.courseDesc.replace(/[0-9]./g, "<\n>$& ");
        // console.log(desc);
        // let courseCards = CourseInfoData.similarCourses.map((val, i) => {
        //     let courseCode = "https://www.ntnu.edu/studies/courses/";
        //     return (
        //         <Col md={4} key={i}>
        //             <Card>
        //                 <CardTitle>{val}</CardTitle>
        //                 <a href={courseCode + val} target="_blank">
        //                     Course Homepage
        //                 </a>
        //             </Card>
        //         </Col>
        //     );
        // });
        return (
            <Container fluid={true} className="course-info">
                {this.state.data && (
                    <Row>
                        <Col md={3} className="course-info-code">
                            {this.state.data.courseCode}
                        </Col>
                        <Col md={9} className="course-info-desc">
                            {this.state.data.courseDesc
                                .replace(/[0-9]./g, "<\n>$& ")
                                .split("<\n>")
                                .map((i, key) => {
                                    return <div key={key}>{i}</div>;
                                })}
                            <Row md={12}>
                                <a
                                    href={
                                        "https://www.ntnu.edu/studies/courses/" +
                                        `${this.state.data.courseCode}`
                                    }
                                    target="_blank"
                                    className="course-info-url"
                                >
                                    See more Details
                                </a>
                            </Row>
                            <Row className="related-courses-header">
                                Related Courses:
                            </Row>
                            <Row className="course-info-related-courses">
                                {this.state.data.similarCourses.map(
                                    (val, i) => {
                                        let courseCode =
                                            "https://www.ntnu.edu/studies/courses/";
                                        return (
                                            <Col md={4} key={i}>
                                                <Card>
                                                    <CardTitle>{val}</CardTitle>
                                                    <a
                                                        href={courseCode + val}
                                                        target="_blank"
                                                    >
                                                        Course Homepage
                                                    </a>
                                                </Card>
                                            </Col>
                                        );
                                    }
                                )}
                            </Row>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}

export default CourseInfo;
