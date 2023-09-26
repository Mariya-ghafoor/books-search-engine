/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Searchbar.module.scss";

function Searchbar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState(null);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //if statement checks if searchTerm has a value other than null or undefined
    if (searchTerm ?? null) {
      handleSubmit(searchTerm); //Passing the searchTerm to App.jsx
      setSearchTerm(e.target.value);
    }

    e.target.reset(); //Resets the form
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
          placeholder="Best books of 2023"
          name="searchTerm"
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default Searchbar;
