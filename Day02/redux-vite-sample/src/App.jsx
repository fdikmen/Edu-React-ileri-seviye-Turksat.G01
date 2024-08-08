// import React from "react";
// import {createStore} from 'redux'
// const myStore = createStore()
import { configureStore } from "@reduxjs/toolkit";

/*function myReducer(state,action) {
  if(action.type === "myAction") {
    return action.payload;
  }
  else if(action.type === "myAction02") {
    return action.payload;
  }
  return "defualt state";
}*/
const initalState = "Default State Value"

function myReducer(state=initalState, action) {
  switch (action.type) {
    case "myAction":
      return action.payload;
    case "myAction02":
      return action.payload;
    default:
      return state;
  }
}

const myStore = configureStore({
  reducer: myReducer,
});

console.log("Val01:", myStore.getState());

const myAction = {
  type: "myAction",
  payload: "myPayload",
};

myStore.dispatch(myAction);
console.log("Val02:", myStore.getState());

myStore.subscribe(() => {
  console.log("Val-subscribe:", myStore.getState());
});
myStore.dispatch(myAction);
myStore.dispatch(myAction);
myStore.dispatch(myAction);

const myAction02 = {
  type: "myAction02",
  payload: "myPayload02",
};

myStore.dispatch(myAction02);

export default function App() {
  return <div>App</div>;
}
