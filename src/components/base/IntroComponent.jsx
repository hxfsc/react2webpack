import React, { Component } from "react";
import { inject, observer } from "mobx-react";

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
                <input
                    type="text"
                    onChange={e => {
                        this.changeNum(e);
                    }}
                />
                <label>
                    appStore 的值为 <strong>{this.props.appStore.num}</strong>
                </label>
            </div>
        );
    }
}

export default IntroComponent;
