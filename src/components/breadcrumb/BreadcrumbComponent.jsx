import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import RouteList from "../../router/router";

class BreadcrumbComponent extends Component {
  routeList() {
    let currentRouter = RouteList.filter(d => d.path == location.pathname);
    // let current = currentRouter.map((d, key) => {
    //     console.log(d)
    //     return (
    //         <Breadcrumb.Item key={key}>
    //             <Link to={d.path}>{d.breadcrumbName}</Link>
    //         </Breadcrumb.Item>
    //     );
    // });
    console.log(currentRouter)
    // return [(<Breadcrumb.Item key="home"><Link to="/">首页</Link></Breadcrumb.Item>)].concat(current);
  }

  render() {
    return <Breadcrumb>{this.routeList()}</Breadcrumb>;
  }
}

export default BreadcrumbComponent;
