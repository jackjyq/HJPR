import React from 'react';
import {
    Button,
    Col,
    Jumbotron,
    ListGroup,
    Row,
   } from 'reactstrap';
import ShowCourses from "./ShowCourses"


class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.handleClickOnCourseList();
    }

    render () {
        return (
            <Jumbotron>
                <h1 className="display-3">Course List</h1>
                <p className="lead"> 
                    This is the course list which generated from user preference
                </p>
                <hr className="my-2" />
                <Row> <Col sm={{ size: 4, offset: 4 }}> <ListGroup flush>
                    <ShowCourses 
                        courses={this.props.courses}
                        setCourseInfo={this.props.setCourseInfo}
                    />
                    {/* exmaple of courses */}
                    {/* <ListGroupItem tag="button" action>1. Math4399</ListGroupItem> */}
                </ListGroup> </Col> </Row>
                <p className="lead" />
                <p className="lead">
                <Button color="danger" onClick={this.handleClick}>Close</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default CourseList