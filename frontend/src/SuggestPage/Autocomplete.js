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
    }
    renderData() {
        fetch("https://api.myjson.com/bins/7s1yx").then(response => {
            response.json().then(data => {
                console.log(data);
                this.setState({
                    data: data
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
        this.props.sendData(evt.currentTarget.innerText);
    }
    handleKeyDown() {
        console.log("");
    }
    handleChange(evt) {
        // let hj = evt.currentTarget.value;
        let suggested = this.state.data.skills.filter(
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
        // let that = this;
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
        // else {
        //     lists = <div>No Components to Show</div>;
        // }
        return (
            <div className="autocomplete-input">
                <Input
                    id={this.props.compID}
                    type="text"
                    placeholder={this.props.placeholderAuto}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    // value={this.state.userinput}
                />
                {lists}
            </div>
        );
    }
}

export default Autocomplete;
