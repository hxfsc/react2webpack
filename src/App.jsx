import React, { Component } from "react";
import Base from "../src/components/base/BaseComponent";
import Intro from "../src/components/base/IntroComponent";
import Props from "../src/components/base/PropsComponent";
import DateC from "../src/components/base/DateComponent";
import Toggle from "../src/components/base/ToggleComponent";
import FormInput from "../src/components/base/FormInputComponent";

import { Layout } from "antd";
const { Header, Content, Sider, Footer } = Layout;
class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider style={{ width: "200px", minHeight: "100vh" }} />
                    <Layout>
                        <Header />
                        <Layout style={{background: "#FFF"}}>
                            <Content>
                                <Base />
                                <Intro />
                                <Props name="fff ss" />
                                <DateC />
                                <Toggle />
                                <hr/>
                                <FormInput />
                            </Content>
                            <Footer style={{textAlign: "center"}}>@Blaiberry</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
