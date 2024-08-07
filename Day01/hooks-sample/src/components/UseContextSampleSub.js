import React, { useContext } from "react";
import { UserInfoContext } from "../hooks/ContextHooks";

export default function UseContextSampleSub() {
  const contextUserData = useContext(UserInfoContext);
  return (
    <div>
      <h1>UseContextSampleSub</h1>
      <p>User Name : {contextUserData.user.name}</p>
      <p>User Age : {contextUserData.user.age}</p>
      <button onClick={() => contextUserData.setUserHandler("Tom", 30)}>
        Change User
      </button>
    </div>
  );
}
