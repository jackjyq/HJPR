import React, { Component } from "react";
import "./RecommendedCoursesPage.css";
import DonutChart from "react-donut-chart";
import {
    Container,
    Row,
    Col,
    // ListGroup,
    // ListGroupItem,
    Card,
    CardTitle
} from "reactstrap";
import recommendedCourses from "./recommendedCourses.json";

class RecommendedCoursesPage extends Component {
    render() {
        let courseURL = "/courses/";
        let coursesList = recommendedCourses.courses.map((val, i) => {
            return (
                <Col md={12} key={i}>
                    <Card href={courseURL + val.label}>
                        <CardTitle>{val.label}</CardTitle>
                        <a href={courseURL + val.label} target="_blank">
                            Know More
                        </a>
                    </Card>
                </Col>
            );
        });
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="7" className="recommended-courses">
                        <div className="recommended-courses-header">
                            Here is a list of Recommended Courses for you:
                        </div>
                        {coursesList}
                    </Col>
                    <Col md="5" className="recommended-courses-chart">
                        <DonutChart
                            data={recommendedCourses.courses}
                            height={400}
                            width={400}
                            innerRadius={0.5}
                            legend={false}
                            strokeColor="#ffffff"
                            onClick={item =>
                                (window.location.href = courseURL + item.label)
                            }
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RecommendedCoursesPage;
