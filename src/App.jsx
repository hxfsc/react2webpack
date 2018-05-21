import React, { Component } from "react";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";


class App extends Component {
  render() {
    return (
      <div>
        <Base />
        <Intro />
      </div>
    );
  }
}

export default App;
