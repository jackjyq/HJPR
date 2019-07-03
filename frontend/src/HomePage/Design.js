// This file is ONLY for demostration the UI and it is NOT part of the App
import React from 'react';
import logo from '../statics/logo.svg';
import wordcloud from '../statics/wordcloud.jpg'
import {
    Button,
    Card, 
    CardText,
    CardBody,
    CardTitle,
    CardFooter,
    CardHeader,
    Col,
    InputGroup,
    InputGroupAddon,
    Input,
    Jumbotron,
    ListGroupItem,
    ListGroup,
    Row,
   } from 'reactstrap';


class Design extends React.Component {
    render() {
        return (
            <div>
                <HomePage />
                <SkillCloud />
                <UserPreference />
                <CourseList />
                <CourseInfo />
            </div>
        )
    }
}


function HomePage() {
    return (
      <Jumbotron>
        <h1 className="display-3">
            <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <p className="lead">The aim of HJPR project is to build a Course Recommender System based on user preferences, including:</p>
        <hr className="my-2" />
        <ul>
            <li>The courses which user has taken before</li>
            <li>The skills which user wants to learn</li>
            <li>The answers from a set of questions</li>
        </ul>
        <p className="lead">
            <Button color="success">Browse</Button>{' '}
            <Button color="primary">Suggest</Button>
        </p>
      </Jumbotron>
    )
}   


function SkillCloud() {
    return (
      <Jumbotron>
        <h1 className="display-3">Browse</h1>
        <p className="lead">You can browse courses based on skills extracted form course descriptions</p>
        <hr className="my-2" />
        <p className="lead">
            <img src={wordcloud}  alt="wordcloud" />
        </p>
        <p className="lead">
            <Button color="danger">Close</Button>{' '}
        </p>
      </Jumbotron>
    )
}   


function UserPreference() {
    return (
      <Jumbotron>
        <h1 className="display-3">Suggest</h1>
        <p className="lead">Please talk a bit about yourself, so that we could give you recommendation</p>
        <hr className="my-2" />
        <p className="lead"> <Row>
            <Col sm="4"> <Card>
                <CardHeader tag="h3">Skills</CardHeader>
                <CardBody>
                    <CardTitle>Add the skills you want to learn</CardTitle>
                    <CardText><InputGroup>
                            <Input placeholder="Python" />
                            <InputGroupAddon addonType="append"><Button color="success">Add</Button></InputGroupAddon>
                    </InputGroup></CardText>
                </CardBody>
                <CardFooter className="text-muted"> <ListGroup>
                    <ListGroupItem color="success">Python<Button close /></ListGroupItem>
                    <ListGroupItem color="info">Programming<Button close /></ListGroupItem>
                    <ListGroupItem color="warning">Teamwork<Button close /></ListGroupItem>
                </ListGroup> </CardFooter>
            </Card> </Col>

            <Col sm="4"> <Card>
                <CardHeader tag="h3">History</CardHeader>
                <CardBody>
                    <CardTitle>Add the courses you have taken</CardTitle>
                    <CardText><InputGroup>
                            <Input placeholder="MA3402" />
                            <InputGroupAddon addonType="append"><Button color="danger">Add</Button></InputGroupAddon>
                    </InputGroup></CardText>
                </CardBody>
                <CardFooter className="text-muted"> <ListGroup>
                    <ListGroupItem color="info">MA3402<Button close /></ListGroupItem>
                    <ListGroupItem color="warning">DRA1002<Button close /></ListGroupItem>
                    <ListGroupItem color="danger">GEOL3092<Button close /></ListGroupItem>
                </ListGroup> </CardFooter>
            </Card> </Col>

            <Col sm="4"> <Card>
                <CardHeader tag="h3">Questionary</CardHeader>
                <CardBody>
                    <CardTitle>Answer the questions below</CardTitle>
                    <CardText> </CardText>
                </CardBody>
                <CardFooter className="text-muted">
                    This function is under development
                </CardFooter>
            </Card> </Col>
        </Row> </p>
        <p className="lead">
          <Button color="primary">Suggest</Button>{' '}
          <Button color="danger">Discard</Button>{' '}
        </p>
      </Jumbotron>
    )
}   




function CourseList() {
    return (
      <Jumbotron>
        <h1 className="display-3">Course List</h1>
        <p className="lead"> 
            This is the course list which generated from user preference
        </p>
        <hr className="my-2" />
        <p> <Row> <Col sm={{ size: 4, offset: 4 }}> <ListGroup flush>
            <ListGroupItem tag="a" href="#">1. MOL8001</ListGroupItem>
            <ListGroupItem tag="a" href="#">2. POL8510</ListGroupItem>
            <ListGroupItem tag="a" href="#">3. SANT1002</ListGroupItem>
            <ListGroupItem tag="a" href="#">4. TBYG3008</ListGroupItem>
            <ListGroupItem tag="a" href="#">5. TDT4180</ListGroupItem>
        </ListGroup> </Col> </Row> </p>
        <p className="lead">
          <Button color="danger">Close</Button>
        </p>
      </Jumbotron>
    )
}   


function CourseInfo() {
    return (
        <Jumbotron>
            <h1 className="display-3">MOL8001</h1>
            <p className="text-left">
                Course description:The aim of this course is to provide students with practical experience in using theoretical-methodological subjects in analyse single texts. Furthermore, students should be able to discuss different types of texts. Students should also learn to reflect on the premises for and meaning of the analytical work. In addition, students will be given insight in how changing methods and interests can influence the appreciation of literature. 
                <a href="#"> Show All</a> 
            </p>
            <hr className="my-2" />
            <p className="lead"> <Row>
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
            </Row> </p>
            <p className="lead">
            <Button color="danger">Close</Button>{' '}
            </p>
        </Jumbotron>
    )
}   


export default Design;