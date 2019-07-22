import React, { Component } from "react";
import Homepage from "./HomePage";
import SuggestPage from "./SuggestPage/SuggestPage";
import { Container, Row } from "reactstrap";

class Home extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Homepage />
                    <SuggestPage />
                </Row>
            </Container>
        );
    }
}

export default Home;
