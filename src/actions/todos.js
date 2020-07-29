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

export { addNewToDo, removeToDo };
