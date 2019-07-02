import React from 'react';

class ShowProjectDescription extends React.Component {
    render () {
        return (
            <p>
            The aim of this project is to build a Course Recommender System on a set of courses, including:
            <ul>
                <li>Keywords(skill)  generator from course description</li>
                <li>Compare the similarity of courses</li>
                <li>Course Recommender based on the courses have taken & keywords</li>
                <li>A data visualization system that indicates the skills.</li>
            </ul>
            </p>
    )
    }
}

export default ShowProjectDescription;