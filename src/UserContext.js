import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const URL_DATA = "./data.json";
  const [userdata, setUserData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser() {
    let response;
    let json;

    try {
      setLoading(true);

      response = await fetch(URL_DATA);
      json = await response.json();

      // If request failed
      if (response.ok === false) {
        // Clear json to not set data
        json = null;

        throw new Error("Not possible to make request");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setUserData(json["currentUser"]);
      setLogin(true);
    }
  }

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ userdata, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
