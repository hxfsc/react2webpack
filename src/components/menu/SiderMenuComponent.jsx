import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Menu, Icon, Card } from "antd";

const SubMenu = Menu.SubMenu;
const { Meta } = Card;
class SiderMenuComponent extends Component {
    render() {
        return (<div>
            <Card
                hoverable
                style={{ width: "100%", border:"none" }}
                cover={<Icon type="gitlab" style={{fontSize: "60px"}} />}
            >
                <Meta
                style={{textAlign:"center"}}
                title="CMS"
                description="hxfsc"
                />
            </Card>
            <Menu theme="light" mode="vertical" style={{borderRight:0, width:"auto"}}>
                <SubMenu title={
                    <span>
                        <Icon type="dashboard" />
                        <span>首页</span>
                    </span>
                }>
                    <Menu.Item><Link to="/intro">Intro</Link></Menu.Item>
                    <Menu.Item>22</Menu.Item>
                    <Menu.Item>33</Menu.Item>
                    <Menu.Item>44</Menu.Item>
                </SubMenu>

                <SubMenu title={
                    <span>
                        <Icon type="line-chart" />
                        <span>图表</span>
                    </span>
                }>
                    <Menu.Item>111</Menu.Item>
                    <Menu.Item>22</Menu.Item>
                    <Menu.Item>33</Menu.Item>
                    <Menu.Item>44</Menu.Item>
                </SubMenu>

                <SubMenu title={
                    <span>
                        <Icon type="table" />
                        <span>表格</span>
                    </span>
                }>
                    <Menu.Item><Link to="table-base">基础图表</Link></Menu.Item>
                    <Menu.Item>22</Menu.Item>
                    <Menu.Item>33</Menu.Item>
                    <Menu.Item>44</Menu.Item>
                </SubMenu>

                <SubMenu title={
                    <span>
                        <Icon type="api" />
                        <span>页面</span>
                    </span>
                }>
                    <Menu.Item>111</Menu.Item>
                    <Menu.Item>22</Menu.Item>
                    <Menu.Item>33</Menu.Item>
                    <Menu.Item>44</Menu.Item>
                </SubMenu>

            </Menu>
        </div>);
    }
}

export default SiderMenuComponent;
