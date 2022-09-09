import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const URL_DATA = "./data.json";
  const [userdata, setUserData] = React.useState(null);
  const [comments, setComments] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Function to increase current id when new comment/reply is posted
  function getCurrentId() {
    let current = window.localStorage.getItem("currentId");
    const newId = parseInt(current) + 1;
    console.log(newId);
    window.localStorage.setItem("oi", "oi");
    window.localStorage.setItem("currentId", newId.toString());

    return current;
  }

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
      setComments(json["comments"]);
      setUserData(json["currentUser"]);
      setLogin(true);
    }
  }

  React.useEffect(() => {
    // Value on local storage that will count number of posts, Helps generating new ids
    window.localStorage.setItem("currentId", "5");
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ comments, setComments, userdata, loading, error, getCurrentId }}
    >
      {children}
    </UserContext.Provider>
  );
};
