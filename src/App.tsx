import * as React from "react"
import { hot } from "react-hot-loader"

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import { Layout, Menu, Icon } from "antd"

const { Header, Sider, Content } = Layout

const { SubMenu } = Menu


import ReduxBase from "@pages/Redux/Base"





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
    })
  }

  renderChildrenMenu(children: IRouter[]): React.ReactNode {
    return children.map((router: IRouter, index: number): React.ReactNode => {
      const { name, icon, path } = router
      return (
        <Menu.Item key={`${name}-${index}`} >
          <Link to={path}>
            <Icon type={icon != null ? icon : "user"} />
            <span>{name}</span>
          </Link>
        </Menu.Item >
      )
    })
  }

  get renderMenu(): React.ReactNode {
    return routes.map((router: IRouter, index: number): React.ReactNode => {
      const { name, icon, children } = router
      if (children != null && children.length > 0) {
        return (
          <SubMenu
            key={`${name}-${index}`}
            title={
              <span>
                <Icon type="user" />
                <span>{name}</span>
              </span>
            }>
            {this.renderChildrenMenu(children)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={`${name}-${index}`} >
          <Icon type={icon != null ? icon : "user"} />
          <span>{name}</span>
        </Menu.Item >
      )
    })
  }

  render() {
    return (
      <Layout className={styles["app-main"]}>
        <Router>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={styles["logo"]} />
            <Menu theme="dark" mode="inline">{this.renderMenu}</Menu>
          </Sider>
          <Layout>
            <Header className={styles["header"]}>
              <Icon className={styles["trigger"]} type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
            </Header>
            <Content className={styles["app-content"]}>
              <Switch>
                <Route path={"/redux/base"} component={ReduxBase} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    )
  }
}

export default App
