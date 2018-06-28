import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import appStore from "./store/store";


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <div>
                <Provider appStore={appStore}>
                    <Component />
                </Provider>
            </div>
        </AppContainer>,
        document.getElementById("root")
    );
};

render(App);

if (module.hot) {
    module.hot.accept("./App", () => {
        const HotApp = require("./App").default;
        render(HotApp);
    });
}
