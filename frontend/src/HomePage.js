import React, { Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "./HomePage.css";
import logo from './logo.svg';
import UserPreference from "./UserPreference"


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Hi Jack and Rishabh")
    }
    render() {
        return (
            <div>
            <Container>
                <Row>
                <Col sm="1" md = "3" className = "show-border">
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
                <Col sm="1" md ="9" className = "show-border">
                    <Button color = "primary" onClick = {this.handleClick}> Get Started</Button>
                </Col>
                </Row>
                <Row>
                    <Col sm = "12">
                    <Button color = "primary" onClick = {this.handleClick}> Get Started</Button>
                    </Col>
                </Row>
            </Container>
            <UserPreference/>
            </div>
        )
    }
}

export default HomePage;