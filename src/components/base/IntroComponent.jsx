import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Tag, Input } from "antd";
@inject("appStore", "appStore")
@observer
class IntroComponent extends Component {
    constructor(props) {
        super(props);
        this.changeNum.bind(this);
    }

    changeNum(event) {
        this.props.appStore.changeNum(event.target.value);
    }

    render() {
        return (
            <div>
                <Input
                    type="text"
                    onChange={e => {
                        this.changeNum(e);
                    }}
                />
                <label>
                    appStore 的值为 <Tag>{this.props.appStore.num}</Tag>
                </label>
            </div>
        );
    }
}

export default IntroComponent;
