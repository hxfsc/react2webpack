import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";
import Props from "../src/components/base/PropsComponent";
import DateC from "../src/components/base/DateComponent";
import Toggle from "../src/components/base/ToggleComponent";
import FormInput from "../src/components/base/FormInputComponent";

import SiderMenu from "../src/components/menu/SiderMenuComponent";

import TableBaseComponent from "../src/components/table/TableBaseComponent";

import { Layout, Icon, Breadcrumb } from "antd";
const { Header, Content, Sider, Footer } = Layout;

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
                                <Breadcrumb style={{ padding: "20px" }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="">Application Center</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="">Application List</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        An Application
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <Content>
                                    <div style={{ padding: "20px" }}>
                                        <Route
                                            exact
                                            path="/"
                                            component={Base}
                                        />
                                        <Route
                                            path="/intro"
                                            component={Intro}
                                        />
                                        <Route
                                            path="/toggle"
                                            component={Toggle}
                                        />
                                        <Route
                                            path="/forminput"
                                            component={FormInput}
                                        />

                                        <Route
                                            path="/table-base"
                                            component={TableBaseComponent}
                                        />
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
