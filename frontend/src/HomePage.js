import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "./HomePage.css";
import logo from './logo.svg';
import UserPreference from "./UserPreference"
import ShowProjectDescription from "./ShowProjectDescription"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasStarted: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // if (this.state.hasStarted) {
        //     this.setState({hasStarted: false})
        // } else {
        //     this.setState({hasStarted: true})
        // }
        this.setState({hasStarted: true})
    }

    render() {
        const hasStarted = this.state.hasStarted
        return (
            <div>
                <Container>
                    <Row>
                        <Col md = "3" className = "border-control">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Col>
                        <Col md ="9" className = "border-control">
                            <ShowProjectDescription></ShowProjectDescription>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm = "12" className = "border-control">
                            <Button color = "primary" onClick = {this.handleClick}> Get Started</Button>
                        </Col>
                    </Row>
            </Container>
                {hasStarted > 0 &&
                    <UserPreference></UserPreference>
                }
            </div>

        )
    }
}

export default HomePage;