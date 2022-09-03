import React from "react";

// const URL_DATA = "/data.json";

const useFetch = (URL_DATA) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const request = React.useCallback(async () => {
    // Need to declare outside of try in order to be acessible in other parts
    let response;
    let json;

    try {
      setLoading(true);

      response = await fetch(URL_DATA);
      json = response.json();

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
      setData(json);

      return {
        response,
        json,
      };
    }
  }, [URL_DATA]);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
