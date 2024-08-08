import React from "react";
import UseEffectMain from "./components/UseEffectMain";
import UseContextSample from "./components/UseContextSample";
import { UserInfoProvider, ThemeProvider } from "./hooks/ContextHooks";
import UseRefSample from "./components/UseRefSample";
import UseReducerSample from "./components/UseReducerSample";
import UseCallbackSample from "./components/UseCallbackSample";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  /*const size = useWindowSize();
  const _width=size.width;
  const _height=size.height;*/

  const { width, height } = useWindowSize();

  return (
    // <UserInfoProvider>
    //   <ThemeProvider>
    //     {/* <UseEffectMain /> */}
    //     <UseContextSample />
    //   </ThemeProvider>
    // </UserInfoProvider>
    // <UseRefSample />
    // <UseReducerSample />
    <>
      <UseCallbackSample />

      <h1>width: {width}</h1>
      <h1>height: {height}</h1>
    </>
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
