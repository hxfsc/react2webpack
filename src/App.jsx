import React, { Component } from "react";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";
import Props from "../src/components/base/PropsComponent";
import DateC from "../src/components/base/DateComponent";
import Toggle from "../src/components/base/ToggleComponent";
import FormInput from "../src/components/base/FormInputComponent";

import SiderMenu from "../src/components/menu/SiderMenuComponent";

import { Layout, Icon } from "antd";
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
                <Layout>
                    <Sider
                        theme={this.state.theme}
                        trigger={null}
                        collapsible
                        collapsed={this.state.menuCollapsed}
                        style={{
                            width: "200px",
                            minHeight: "100vh",
                            borderRight: "1px solid #d9d9d9"
                        }}>
                        <SiderMenu />
                    </Sider>
                    <Layout>
                        <Header style={{ background: "#FFF" }}>
                            <Icon
                                className="trigger"
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
                                <Base />
                                <Intro />
                                <Props name="fff ss" />
                                <DateC />
                                <Toggle />
                                <hr />
                                <FormInput />
                            </Content>
                            <Footer style={{ textAlign: "center" }}>
                                @Blaiberry
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
