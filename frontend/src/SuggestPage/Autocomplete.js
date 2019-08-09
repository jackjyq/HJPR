import React, { Component } from "react";
import { Input } from "reactstrap";
import "./Autocomplete.css";

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            filters: [],
            userinput: "",
            showSuggestions: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.myReference = React.createRef();
    }
    renderData() {
        const callingAPI = this.props.callingAPI;
        fetch(`./api/${callingAPI}/`).then(response => {
            response.json().then(data => {
                this.setState({
                    data: data[callingAPI]
                });
            });
        });
    }
    componentWillMount() {
        this.renderData();
    }
    handleClick(evt) {
        this.setState({
            filters: [],
            userinput: "",
            showSuggestions: false
        });
        this.myReference.current.value = "";
        this.props.sendData(evt.currentTarget.innerText);
    }
    handleKeyDown(evt) {
        if (evt.keyCode === 27) {
            this.setState({
                showSuggestions: false
            });
        }
    }
    handleChange(evt) {
        let suggested = this.state.data.filter(
            val =>
                val
                    .toLowerCase()
                    .indexOf(evt.currentTarget.value.toLowerCase()) > -1
        );
        this.setState({
            filters: suggested,
            userinput: evt.currentTarget.value,
            showSuggestions: true
        });
    }

    render() {
        let lists;
        if (this.state.showSuggestions && this.state.filters.length) {
            if (this.state.filters.length) {
                lists = (
                    <ul className="autocomplete-unordered">
                        {this.state.filters.map((val, i) => {
                            return (
                                <li key={i} onClick={this.handleClick}>
                                    {val}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }
        return (
            <div className="autocomplete-input">
                <Input
                    id={this.props.compID}
                    type="text"
                    placeholder={this.props.placeholderAuto}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    autoComplete="off"
                    innerRef={this.myReference}
                />
                {lists}
            </div>
        );
    }
}

export default Autocomplete;
