import React from "react";
import ReactDOM from "react-dom";
import { useAxios } from "./useAxios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json?sort_by=rating",
  });
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
