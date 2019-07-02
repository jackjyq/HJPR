import React from 'react';
import "./UserPreference.css";
import {
    Container,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    Form, 
    FormGroup,
    FormText
   } from 'reactstrap';

class UserPreference extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Row>
                    Add Skills you want to learn
                </Row>
                <Row>
                    <Col md = '4' className = "border-control">
                        <InputGroup>
                        <Input placeholder="Python" />
                        <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col md = '8' className = "border-control">
                    </Col>
                </Row>

                <Row>
                    Add course codes which you have already taken
                </Row>
                <Row>
                    <Col md = '4' className = "border-control">
                        <InputGroup>
                        <Input placeholder="COMP9021" />
                        <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col md = '8' className = "border-control">
                    </Col>
                </Row>

                <Row>
                <Col>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </FormGroup>
                </Col>
   
                </Row>

            </Container>
        )
    }
}

export default UserPreference;