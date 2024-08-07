import React, { useContext, useState } from "react";
import { ThemeContext, UserInfoContext } from "../hooks/ContextHooks";
import UseContextSampleSub from "./UseContextSampleSub";

export default function UseContextSample() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const contextUserData = useContext(UserInfoContext);
  return (
    <div>
      <h1>UseContextSample</h1>
      Theme Switcher
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br />
      <button onClick={() => contextUserData.setUserHandler("Tomx", 35)}>
        Change User
      </button>
      <hr />
      <UseContextSampleSub />
    </div>
  );
}
