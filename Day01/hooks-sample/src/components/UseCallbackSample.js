import React, { useState } from "react";

const MemoizedButton = React.memo(({ onClick }) => {
  console.log("MemoizedButton rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default function UseCallbackSample() {
  const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     console.log("Button clicked");
  //   };
  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <div>
      UseCallbackSample
      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedButton onClick={handleClick} />
    </div>
  );
}
