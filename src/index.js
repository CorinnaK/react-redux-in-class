import React from "react";
import ReactDOM from "react-dom";
import toDoReducer from "./reducers/todos";
// import { addNewToDo } from "./actions/todos";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

/**
 * Redux Store
 */
let store = createStore(toDoReducer);
// store.subscribe(() => console.log(store.getState()));

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from our store/state data
 */

// store.dispatch(addNewToDo("Buy Milk"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
