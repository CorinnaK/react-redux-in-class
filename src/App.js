import React, { Component } from "react";
import { addNewToDo, removeToDo } from "./actions/todos";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
    };
  }
  addToDo = (event) => {
    event.preventDefault();
    this.props.dispatch(addNewToDo(this.state.newToDo));
    this.setState({ newToDo: "" });
  };

  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  removeToDo(id) {
    this.props.dispatch(removeToDo(id));
  }

  render() {
    return (
      <>
        <h1> React To-Do App</h1>
        <form onSubmit={this.addToDo}>
          <label htmlFor="newToDo">Enter a new "To-Do": </label>
          <input
            type="text"
            name="newToDo"
            id="newToDo"
            required
            value={this.state.newToDo}
            onChange={(event) => this.updateItem("newToDo", event.target.value)}
          />
          <input type="submit" value="Add New To-Do" />
        </form>
        <h2>Current To-Dos:</h2>
        <ul>
          {this.props.toDos.map((toDo) => (
            <li
              key={toDo.uniqueId}
              onClick={() => {
                this.removeToDo(toDo.uniqueId);
              }}
            >
              {toDo.value}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default connect((state) => {
  return { toDos: state };
})(App);

// export default App;
