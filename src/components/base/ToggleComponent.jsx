import React, { Component } from "react";
import { Switch, Button } from "antd";
class ToggleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: false
        };
    }

    handleToggle() {
        this.setState({
            state: !this.state.state
        });
    }
    swithChage() {
        this.setState({
            state: !this.state.state
        });
    }
    render() {
        return (
            <div>
                <Switch
                    checkedChildren="开"
                    unCheckedChildren="关"
                    checked={this.state.state}
                    onChange={() => this.swithChage()}
                />
                <Button size="small" onClick={() => this.handleToggle()}>
                    {this.state.state === true ? "ON" : "OFF"}
                </Button>
            </div>
        );
    }
}

export default ToggleComponent;
