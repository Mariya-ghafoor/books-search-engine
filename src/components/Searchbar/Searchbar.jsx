/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import styles from "./Searchbar.module.scss";

function Searchbar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const onInputChange = (e) => {
    console.log("input has changed");
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    if (searchTerm !== "" || null) handleSubmit(searchTerm); //Passing the searchTerm to App.jsx

    e.target.reset(); //Resets the form
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
          placeholder="Best books of 2023"
          name="searchTerm"
          ref={inputRef}
        />
      </form>
    </div>
  );
}

export default Searchbar;
