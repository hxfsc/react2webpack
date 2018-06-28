import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("appStore", "appStore")
@observer
class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.changeName.bind(this);
    }

    changeName() {
        console.log(this);
    }

    changeBaseName(event) {
        this.props.appStore.chageBaseName(event.target.value);
    }

    render() {
        return (
            <div>
                {this.props.appStore.name}
                <input
                    type="text"
                    onChange={e => {
                        this.changeBaseName(e);
                    }}
                />
                <button onClick={() => this.changeName()}>改变名字</button>
            </div>
        );
    }
}

export default BaseComponent;
