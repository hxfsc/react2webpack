import React, { Component } from "react";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";
import Props from "../src/components/base/PropsComponent";
import DateC from "../src/components/base/DateComponent";
import Toggle from "../src/components/base/ToggleComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Base />
        <Intro />
        <Props name="xxxx" />
        <DateC />
        <Toggle />
      </div>
    );
  }
}

export default App;
