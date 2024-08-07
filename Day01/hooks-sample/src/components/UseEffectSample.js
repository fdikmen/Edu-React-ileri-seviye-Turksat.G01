import React from "react";
import { useState, useEffect } from "react";

export default function UseEffectSample() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("React Note ");
  /*useEffect(() => {
    console.log("Component Did Mount");
    console.log("Component Did Update");
    return () => {
      console.log("Component Will Unmount");
    };
  }, [counter]);*/

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update");
  }, [counter, name]);

  const changeHandler = () => {
    setCounter(counter + 1);
    setName("React Note " + counter);
  };

  return (
    <>
      <h1>UseEffectSample</h1>

      <h2>Counter : {counter}</h2>
      <h2>Name : {name}</h2>
      <button onClick={changeHandler}>Arttır</button>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
    </>
  );
}
