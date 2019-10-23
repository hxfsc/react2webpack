import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Card } from "antd";
import RouteList from "../../router/router";
import _ from "lodash"

const SubMenu = Menu.SubMenu;
const { Meta } = Card;

class SiderMenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    openKeys: []
  };

  rootSubmenuKeys = RouteList.map(item => {
    return item.id+"";
  });

  formatMenu = (data, parentPath = "/") => {

  }

  renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
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
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          </Link>
        </Menu.Item>
      );
    });
  }

  onOpenChange = openKeys => {

    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );

    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }

    console.log(this.state.openKeys)
  };

  render() {
    return (
      <div>
        <Card
          hoverable
          style={{ border: "none" }}
          cover={<Icon type="gitlab" style={{ fontSize: "60px" }} />}>
          <Meta style={{ textAlign: "center" }} title="CMS" />
        </Card>

        <Menu
          theme="light"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={ this.onOpenChange }
          inlineCollapsed={this.props.collapsed}
          style={{ borderRight: 0, width: "auto" }}>
          {this.renderMenu(RouteList)}
        </Menu>
      </div>
    );
  }
}

export default SiderMenuComponent;
