import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import wordcloud from '../statics/wordcloud.jpg'

class BrowsePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.handleClickOnBrowsePage();
    }

    render () {
        return (
            <Jumbotron id="browsePage">
                <h1 className="display-3">Browse</h1>
                <p className="lead">You can browse courses based on skills extracted form course descriptions</p>
                <hr className="my-2" />
                <p className="lead">
                    <img src={wordcloud}  alt="wordcloud" />
                </p>
                <p className="lead">
                    <Button color="danger" onClick={this.handleClick}>Close</Button>{' '}
                </p>
            </Jumbotron>
        )
    }
}

export default BrowsePage