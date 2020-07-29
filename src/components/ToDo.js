import React, { Component } from "react";
import { removeToDo } from "../actions/todos";
import { connect } from "react-redux";

class ToDo extends Component {
  deleteToDo = () => {
    const id = this.props.uniqueId;
    this.props.dispatch(removeToDo(id));
  };
  render() {
    return (
      <li>
        <input type="checkbox" onClick={this.deleteToDo} />
        {this.props.text}
      </li>
    );
  }
}
export default connect(null)(ToDo);
