import React from 'react';
import { ListGroupItem } from 'reactstrap';

class ShowCourses extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const course = this.props.courses[e.currentTarget.id]
        this.props.setCourseInfo(course)
        // console.log(course)
    }

    render () {
        const courses = this.props.courses
        let listItem = []
        for (let i = 0; i < courses.length; i++) {
            listItem.push(<ListGroupItem key={i} tag="button" id={i} onClick={this.handleClick} action>{i + "." + courses[i]}</ListGroupItem>)
        }
        return listItem
    }
}

export default ShowCourses