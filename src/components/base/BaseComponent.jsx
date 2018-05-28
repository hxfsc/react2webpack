import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("appStore", "appStore")
@observer
class BaseComponent extends Component {

  changeName() {
    this.props.appStore.change();
  }

  render() {
    return (
    <div>
      {this.props.appStore.name}

      <button onClick={() => this.changeName()}>改变名字</button>
    </div>);
  }
}

export default BaseComponent;
