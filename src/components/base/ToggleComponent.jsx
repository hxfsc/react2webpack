import React, { Component } from "react";

class ToggleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: true
        };
    }

    handleToggle() {
        this.setState({
            state: !this.state.state
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleToggle()}>
                    {this.state.state === true ? "ON" : "OFF"}
                </button>
            </div>
        );
    }
}

export default ToggleComponent;
