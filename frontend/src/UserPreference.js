import React, { Component } from "react";
import "./UserPreference.css";
import { Container, Row, Col, Button } from "reactstrap";

class UserPreference extends Component {
    render() {
        return (
            <Container fluid={true} className="user-preference">
                <Row>Tell us a little bit about yourself</Row>
            </Container>
        );
    }
}

export default UserPreference;
