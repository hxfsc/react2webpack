import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Base from "../src/components/base/BaseComponent";
// import Intro from "../src/components/base/IntroComponent";
// import Props from "../src/components/base/PropsComponent";
// import DateC from "../src/components/base/DateComponent";
// import Toggle from "../src/components/base/ToggleComponent";
// import FormInput from "../src/components/base/FormInputComponent";

import SiderMenu from "../src/components/menu/SiderMenuComponent";
import Breakcrumb from "../src/components/breadcrumb/BreadcrumbComponent";
// import TableBaseComponent from "../src/components/table/TableBaseComponent";
// import CheckboxComponent from "../src/components/Form/CheckboxComponent";

import { Layout, Icon, Breadcrumb } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import RouterList from "../src/router/router";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
            menuCollapsed: false
        };
    }

    menuToggle = () => {
        this.setState({
            menuCollapsed: !this.state.menuCollapsed
        });
    };

    render() {
        const RouteBox = route => (
            <Route
                path={route.path}
                exact={route.exact}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );

        return (
            <div>
                <Router>
                    <Layout>
                        <Sider
                            theme={this.state.theme}
                            trigger={null}
                            collapsible
                            collapsed={this.state.menuCollapsed}
                            style={{
                                width: "200px",
                                minHeight: "100vh",
                                borderRight: "1px solid #e8e8e8"
                            }}>
                            <SiderMenu />
                        </Sider>
                        <Layout>
                            <Header
                                style={{
                                    background: "#FFF",
                                    paddingLeft: "20px",
                                    borderBottom: "1px solid #e8e8e8"
                                }}>
                                <Icon
                                    className="trigger"
                                    style={{ fontSize: "24px" }}
                                    type={
                                        this.state.menuCollapsed
                                            ? "menu-unfold"
                                            : "menu-fold"
                                    }
                                    onClick={this.menuToggle}
                                />
                            </Header>
                            <Layout style={{ background: "#FFF" }}>
                                <Content>
                                    <div style={{padding: "20px"}}>
                                        <Breakcrumb />
                                    </div>
                                    <div style={{ padding: "20px" }}>
                                        {RouterList.map((route, i) => (
                                            <RouteBox key={i} {...route} />
                                        ))}
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: "center" }}>
                                    @hxfsc
                                </Footer>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
