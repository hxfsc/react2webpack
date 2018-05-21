import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App";

const user = {
  firstName: "Hu",
  lastName: "Xiaofei",
};

const fromatName = (user) => {
  return `测试 ${user.firstName} ${user.lastName}`;
};

const elem = <div>IntroComponent , {fromatName(user)}!</div>;

const render = (Component) => {
  ReactDOM.render(<AppContainer>
      <div>
        <Component />
        <div>
          {elem}
        </div>
      </div>
    </AppContainer>, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const HotApp = require("./App").default;
    render(HotApp);
  });
}
