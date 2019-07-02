import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./HomePage.css";
import logo from "./logo.svg";
// import UserPreference from "./UserPreference"
import WordCloud from "react-d3-cloud";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        const data = [
            { text: "Hey", value: 1000 },
            { text: "lol", value: 200 },
            { text: "first impression", value: 800 },
            { text: "very cool", value: 1000000 },
            { text: "duck", value: 10 }
        ];
        const fontSizeMapper = word => Math.log2(word.value) * 5;
        const rotate = word => word.value % 360;
        this.state = {
            data: data,
            fontSizeMapper: fontSizeMapper,
            rotate: rotate
        };
    }

    handleClick() {
        alert("Hi Jack and Rishabh");
    }
    render() {
        return (
            <Container fluid={true} className="homepage-container">
                <Row className="homepage-row">
                    <Col
                        sm="1"
                        md="4"
                        className="show-border homepage-logo-col"
                    >
                        <img src={logo} className="homepage-logo" alt="logo" />
                    </Col>
                    <Col
                        sm="1"
                        md="8"
                        className="show-border homepage-detail-col"
                    >
                        <div className="homepage-detail">
                            <svg
                                width="200"
                                height="200"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="homepage-detail-svg-1"
                            >
                                <circle
                                    cx="23"
                                    cy="23"
                                    r="20"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />
                                <circle
                                    cx="75"
                                    cy="45"
                                    r="24"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />

                                {/* <rect
                                    // id="a"
                                    // x="14"
                                    // y="23"
                                    width="28"
                                    height="28"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />
                                <rect
                                    // x="52"
                                    // y="33"
                                    width="100"
                                    height="11"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                /> */}
                            </svg>
                            <Row>
                                <Col className="homepage-find-courses">
                                    Find the right courses for you that you
                                    like!
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        // color="primary"
                                        className="homepage-button"
                                        onClick={this.handleClick}
                                    >
                                        Get Started
                                    </Button>
                                </Col>
                            </Row>
                            <div className="homepage-detail-word-cloud">
                                <WordCloud
                                    data={this.state.data}
                                    fontSizeMapper={this.state.fontSizeMapper}
                                    // rotate={this.state.rotate}
                                    width={200}
                                    height={400}
                                    font={"Monospace"}
                                />
                            </div>
                            <svg
                                width="200"
                                height="200"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="homepage-detail-svg-2"
                            >
                                <circle
                                    cx="23"
                                    cy="23"
                                    r="20"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />
                                <circle
                                    cx="45"
                                    cy="45"
                                    r="25"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />

                                {/* <rect
                                    // id="a"
                                    // x="14"
                                    // y="23"
                                    width="28"
                                    height="28"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                />
                                <rect
                                    // x="52"
                                    // y="33"
                                    width="100"
                                    height="11"
                                    fill="transparent"
                                    strokeWidth="2"
                                    stroke="#60856b"
                                /> */}
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Container.propTypes = {
    fluid: true
    // applies .container-fluid class
};

export default HomePage;
