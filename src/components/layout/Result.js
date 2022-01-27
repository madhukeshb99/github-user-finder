import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Result = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading, query } = githubContext;

  return (
    <div>
      {users.length > 0 && loading === false && (
        <div style={{ height: "40px" }}></div>
      )}
      {users.length > 0 && loading === false && (
        <h2 style={{ display: "inline" }}>
          Results for
          <h1 style={{ display: "inline" }}> '{query}' </h1>{" "}
        </h2>
      )}
      {users.length === 0 && loading === false && query.length > 0 && (
        <h2 style={{ display: "inline" }}>
        Oops! Results for
        <h1 style={{ display: "inline" }}> '{query}' </h1>{" "}
        is not found :-(
      </h2>
      )}
    </div>
  );
};

export default Result;
