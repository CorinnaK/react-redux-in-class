import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return <li>{this.props.task}</li>;
  }
}
export default ToDo;
