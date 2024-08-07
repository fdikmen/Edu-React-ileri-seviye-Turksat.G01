import React, { useState, useRef } from "react";

export default function UseRefSample() {
  const inputRef = useRef(null);
  const focusHandler = () => {
    console.log("InputRef : ", inputRef);
    console.log("Input Current : ", inputRef.current);
    console.log("Input Value : ", inputRef.current.value);
    console.log("Input Type : ", inputRef.current.type);
    console.log("Input Name : ", inputRef.current.name);
    console.log("Input Id : ", inputRef.current.id);
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>UseRefSample</h1>
      <input ref={inputRef} type="text" id="username" name="_username" />
      <button onClick={focusHandler}>Focus Input</button>
    </div>
  );
}
