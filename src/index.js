import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { v4 as uuidv4 } from "uuid";
import { createStore } from "redux";
import { Provider } from "react-redux";

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
// Redux Reducer
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
/**
 * Redux Store
 */
let store = createStore(toDoReducer);
store.subscribe(() => console.log(store.getState()));

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from our store/state data
 */

store.dispatch(addNewToDo("Buy Milk"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
