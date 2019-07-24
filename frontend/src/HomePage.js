import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./HomePage.css";
import logo from "./logo.svg";
// import UserPreference from "./UserPreference"
// import WordCloud from "react-d3-cloud";
import TagCloud from "react-tag-cloud";
// import keyWords from "./keywords.json";
// import SuggestPage from "./SuggestPage/SuggestPage";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleWordCloudClick = this.handleWordCloudClick.bind(this);
        this.state = {
            data: null
        };
    }

    handleClick() {
        document.querySelector(".user-preference").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
    handleWordCloudClick(e) {
        alert(e.target.innerHTML);
    }
    renderData() {
        localStorage.removeItem("data");
        fetch("./api/cloud").then(response => {
            response.json().then(data => {
                console.log(data);
                this.setState({
                    data: data
                });
            });
        });
    }
    componentWillMount() {
        this.renderData();
    }
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 6000);
    }

    render() {
        return (
            <Container fluid={true} className="homepage-container">
                <Row className="homepage-row">
                    <Col xs="4" sm="4" className=" homepage-logo-col">
                        <img src={logo} className="homepage-logo" alt="logo" />
                    </Col>
                    <Col xs="8" sm="8" className=" homepage-detail-col">
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
                            {/* <Row> */}
                            <div className="homepage-find-courses">
                                Find the right courses for you.
                            </div>
                            {/* </Row> */}
                            {/* <Row>
                                <Col> */}
                            <Button
                                // color="primary"
                                className="homepage-button"
                                onClick={this.handleClick}
                            >
                                Get Started
                            </Button>
                            {/* </Col>
                            </Row> */}
                            {this.state.data && (
                                <div className="homepage-detail-word-cloud">
                                    {/* <WordCloud
                                    data={this.state.data}
                                    fontSizeMapper={this.state.fontSizeMapper}
                                    // rotate={this.state.rotate}
                                    width={200}
                                    height={400}
                                    font={"Monospace"}
                                /> */}
                                    <TagCloud
                                        style={{
                                            fontFamily: "sans-serif",
                                            fontSize: 10,
                                            fontWeight: "bold",
                                            fontStyle: "italic",
                                            color: "#000",
                                            padding: 2,
                                            width: "100%",
                                            height: "20%"
                                        }}
                                    >
                                        {this.state.data.keywords.map(
                                            (val, i) => {
                                                // console.log(val);
                                                return (
                                                    <div
                                                        style={{ fontSize: 20 }}
                                                        key={i}
                                                        onClick={
                                                            this
                                                                .handleWordCloudClick
                                                        }
                                                    >
                                                        {val.label}
                                                    </div>
                                                );
                                            }
                                        )}
                                    </TagCloud>
                                </div>
                            )}
                            {/* <svg
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
                                /> */}
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
                            {/* </svg> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            // <SuggestPage />
        );
    }
}

export default HomePage;
