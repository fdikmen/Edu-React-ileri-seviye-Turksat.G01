import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UserInfoContext = createContext();
export const UserInfoProvider = (props) => {
  const [user, setUser] = useState({ name: "Tommy", age: 25 });
  const setUserHandler = (name, age) => {
    setUser((prevUser) => ({ name, age }));
  };
  return (
    <UserInfoContext.Provider value={{ user, setUserHandler }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};
