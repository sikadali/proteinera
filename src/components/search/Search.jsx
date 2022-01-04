import "./Search.css";
import { useState } from "react";


export default function Search () {
  const [query, setQuery] = useState("");

  const onSubmit = () => {
    console.log(query);
  };

  return (
    <div className="search">
      <h1>PROTEINERA</h1>
      <form className="search__searchForm">
        <input
          type="text"
          className="search__input"
          placeholder="enter some keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          className="search__submit"
          type="submit"
          value="Search"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}
