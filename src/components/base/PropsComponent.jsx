import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";
class PropsComponent extends Component {
  render() {
    return <Tag>{this.props.name}</Tag>;
  }
}
PropsComponent.propTypes = {
  name: PropTypes.string
};

export default PropsComponent;
