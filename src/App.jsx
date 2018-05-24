import React, { Component } from "react";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";
import Props from "../src/components/base/PropsComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Base />
        <Intro />
        <Props name="xxxx" />
      </div>
    );
  }
}

export default App;
