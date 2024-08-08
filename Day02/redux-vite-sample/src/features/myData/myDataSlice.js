/*function myDataReducer(state,action) {
  if(action.type === "myAction") {
    return action.payload;
  }
  else if(action.type === "myAction02") {
    return action.payload;
  }
  return "defualt state";
}*/
const initalState = "Default State Value";

function myDataReducer(state = initalState, action) {
  switch (action.type) {
    case "myAction":
      return action.payload;
    case "myAction02":
      return action.payload;
    default:
      return state;
  }
}

export { myDataReducer };