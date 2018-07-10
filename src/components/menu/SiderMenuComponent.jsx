import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Card } from "antd";
import RouteList from "../../router/router";

const SubMenu = Menu.SubMenu;
const { Meta } = Card;

class SiderMenuComponent extends Component {
    renderMenu(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.id + "s"}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.name}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }

            return (
                <Menu.Item key={item.id}>
                    <Link to={item.path} href={item.path}>
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        });
    }

    render() {
        //console.log(this.renderMenu(RouteList));
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: "100%", border: "none" }}
                    cover={<Icon type="gitlab" style={{ fontSize: "60px" }} />}>
                    <Meta style={{ textAlign: "center" }} title="CMS" />
                </Card>

                <Menu
                    theme="light"
                    mode="vertical"
                    style={{ borderRight: 0, width: "auto" }}>
                    {this.renderMenu(RouteList)}
                </Menu>
            </div>
        );
    }
}

export default SiderMenuComponent;
