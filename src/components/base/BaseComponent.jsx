import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Input, Button } from "antd";

const Search = Input.Search;

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
                <Input
                    type="text"
                    size="large"
                    onChange={e => {
                        this.changeBaseName(e);
                    }}
                />

                <Search size="large" />

                <Button
                    size="large"
                    type="primary"
                    onClick={() => this.changeName()}>
                    改变名字
                </Button>

                <Button type="danger" size="large">警告</Button>
                <div style={{height: "2000px"}}></div>
            </div>
        );
    }
}

export default BaseComponent;
