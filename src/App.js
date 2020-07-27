import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
      toDos: [],
    };
  }
  addToDo = (event) => {
    event.preventDefault();
    const newTask = {
      uniqueId: uuidv4(),
      value: this.state.newToDo,
    };
    const currentToDoList = [...this.state.toDos];
    currentToDoList.push(newTask);
    this.setState({
      toDos: currentToDoList,
      newToDo: "",
    });
  };

  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  removeToDo(id) {
    const currentToDoList = [...this.state.toDos];

    const updatedToDoList = currentToDoList.filter(
      (toDo) => toDo.uniqueId !== id
    );
    this.setState({ toDos: updatedToDoList });
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
          {this.state.toDos.map((toDo) => (
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

export default App;
