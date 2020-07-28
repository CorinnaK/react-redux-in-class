import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { createStore } from "redux";

//
// Redux Actions
// names the actions
const addNewToDo = (toDoContent) => {
  return {
    type: "ADD_NEW_TO_DO", // Our action label
    value: toDoContent, // Necessary values (input in this case)we will need to have to carry out action
  };
};

const removeToDo = (toDoId) => {
  return {
    type: "REMOVE_TO_DO",
    value: toDoId, // Need to know the Id of the todo to remove
  };
};

//
//Redux Reducer
// does the action
const toDoReducer = (state = [], action) => {
  switch (action.type) {
    //What happens if we are adding a new to-do:
    case "ADD_NEW_TO_DO":
      // Set up new Task
      const newTask = {
        uniqueId: uuidv4(), // Ensure unique ID
        value: action.value, // Read current "new todo" value
      };
      // Add this task to the state
      state.push(newTask);
      // Return the updated state value
      return state;
    case "REMOVE_TO_DO":
      state = state.filter((toDo) => toDo.uniqueId !== action.value);
      return state;
  }
};

let store = createStore(toDoReducer);
store.subscribe(() => console.log(store.getState()));

/**
 * Redux Dispatch
 */

store.dispatch(addNewToDo("Buy Milk"));

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
