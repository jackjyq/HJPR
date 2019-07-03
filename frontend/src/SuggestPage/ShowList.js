import React from 'react';
import {
    Button,
    ListGroupItem,
   } from 'reactstrap';


class ShowList extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const id = e.currentTarget.id
        this.props.onRemoveItem(id)
    }

    render () {
        let listItem = []
        const colors = ["success", "warning", "info", "primary", "danger"]
        for (let i = 0; i < this.props.list.length; i++) {
            listItem.push( <ListGroupItem color={colors[i % colors.length]} key={i}>{this.props.list[i]}<Button id={i} close onClick={this.handleClick}/></ListGroupItem>)
        }
        return listItem
    }
}

export default ShowList