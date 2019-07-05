import React from 'react';
import {
    Button,
    Card, 
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Col,
    Jumbotron,
    Row,
   } from 'reactstrap';


class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.handleClickOnCourseInfo();
    }

    render () {
        const course = this.props.course
        // console.log(course)
        return (
            <Jumbotron>
                <h1 className="display-3">{course}</h1>
                <p className="text-left">
                    Course description:The aim of this course is to provide students with practical experience in using theoretical-methodological subjects in analyse single texts. Furthermore, students should be able to discuss different types of texts. Students should also learn to reflect on the premises for and meaning of the analytical work. In addition, students will be given insight in how changing methods and interests can influence the appreciation of literature. 
                    <a href="#"> Show All</a> 
                </p>
                <hr className="my-2" />
                <Row>
                    <Col sm="6"> <Card>
                        <CardHeader tag="h3">Skills you will gain</CardHeader>
                        <CardBody>
                            <CardTitle>Add the skills you want to learn</CardTitle>
                            <CardText>
                                <Button color="primary" outline> Python </Button>{' '}
                                <Button color="primary" outline> Machine Learning </Button>{' '}
                                <Button color="primary" outline> Tensorflow </Button>{' '}
                            </CardText>
                        </CardBody>
                    </Card> </Col>

                    <Col sm="6"> <Card>
                        <CardHeader tag="h3">Similar Courses</CardHeader>
                        <CardBody>
                            <CardTitle>Add the courses you have taken</CardTitle>
                            <CardText>
                                <Button color="success" outline> ENG1101 </Button>{' '}
                                <Button color="success" outline> KULT2202 </Button>{' '}
                                <Button color="success" outline> AAR4465 </Button>{' '}
                            </CardText>
                        </CardBody>
                    </Card> </Col>
                </Row>
                <p className="lead"/>
                <p className="lead">
                <Button color="danger" onClick={this.handleClick}>Close</Button>{' '}
                </p>
            </Jumbotron>
        )
    }
}

export default CourseInfo