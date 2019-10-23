import * as React from "react"
import { hot } from "react-hot-loader"

import { Layout, Menu, Icon } from "antd"

const { Header, Sider, Content } = Layout


import routes, { IRouter } from "./router/router"

import * as styles from "@static/styles/css.scss"

interface IProps { }
interface IState { }
@hot(module)
class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
  }

  state = {
    collapsed: false,
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    });
  };

  get renderMenu(): React.ReactNode {
    return routes.map((router: IRouter, index: number): React.ReactNode => {
      const { name } = router
      return (
        <Menu.Item key={index} >
          <Icon type="user" />
          <span>{name}</span>
        </Menu.Item >
      )
    })
  }

  render() {
    return (
      <Layout className={styles["app-main"]}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles["logo"]} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {this.renderMenu}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles["trigger"]}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles["app-content"]}>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
