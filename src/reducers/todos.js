import { v4 as uuidv4 } from "uuid";
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
      const updatedState = state.slice();
      updatedState.push(newTask);
      // Return the updated state value
      return updatedState;
    case "REMOVE_TO_DO":
      state = state.filter((toDo) => toDo.uniqueId !== action.value);
      return state;
    default:
      return state;
  }
};

export default toDoReducer;
