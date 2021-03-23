import React, { Component } from 'react';
class SearchAndFilterData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        }
    }

    onSearchClicked(ev) {
        if (this.state.userName === "") {
            return
        }
        this.props.onSearchClickedProp(this.state.userName)
    }

    onKeyPress(ev) {
        if (ev.which === 13) {
            this.props.onSearchClickedProp(this.state.userName)

        }
    }

    onSearchValueChanged(ev) {
        this.setState({ userName: ev.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" className="searchBoxUsername" onChange={this.onSearchValueChanged.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
                <button className="searchButton" onClick={this.onSearchClicked.bind(this)}>Search</button>
            </div>
        );
    }
}

export default SearchAndFilterData;