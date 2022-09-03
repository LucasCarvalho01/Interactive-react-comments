import React from "react";

export const UserContext = React.createContext();

export const UserInfo = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const response = await fetch("/data.json");
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ data }}>{children}</UserContext.Provider>
  );
};
