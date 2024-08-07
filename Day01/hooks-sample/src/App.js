import React from "react";
import UseEffectMain from "./components/UseEffectMain";
import UseContextSample from "./components/UseContextSample";
import { UserInfoProvider, ThemeProvider } from "./hooks/ContextHooks";
import UseRefSample from "./components/UseRefSample";
import UseReducerSample from "./components/UseReducerSample";
import UseCallbackSample from "./components/UseCallbackSample";

export default function App() {
  return (
    // <UserInfoProvider>
    //   <ThemeProvider>
    //     {/* <UseEffectMain /> */}
    //     <UseContextSample />
    //   </ThemeProvider>
    // </UserInfoProvider>
    // <UseRefSample />
    // <UseReducerSample />
    <UseCallbackSample />
  );
}

/*
export default function App() {
  const UserInfoContext = createContext();
  const [user, setUser] = useState({ name: "Tommy", age: 25 });
  const setUserHandler = (name, age) => {
    setUser((prevUser) => ({ name, age }));
  };
  const theme = "light";
  return (
    <UserInfoContext.Provider value={{ user, setUserHandler,theme }}>
      <UseContextSample />
    </UserInfoContext.Provider>
  );
}
  */
