import React from "react";
import { useState } from "react";
import UseEffectSample from "./UseEffectSample";

export default function UseEffectMain() {
  const [showHide, setShowHide] = useState(true)
  return (
    <>
      {
        showHide && <UseEffectSample />
      }
      <hr/>
      <button onClick={() => setShowHide(!showHide)}>Gizle/Göster</button>
    </>
  );
}
