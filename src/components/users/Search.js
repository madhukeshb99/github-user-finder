import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

const Search = () => {
  const [text, setText] = useState("");

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, users, query, clearUsers } = githubContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "")  alertContext.setAlert("Please enter anything to search", "light");
    else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {(users.length > 0 || (query.length > 0 && users.length === 0)) && (
          <button
            className="btn btn-light btn-block"
            style={{ marginTop: "2px" }}
            onClick={clearUsers}
          >
            {" "}
            Clear{" "}
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
