/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import styles from "./Searchbar.module.scss";

function Searchbar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const inputRef = useRef(null);

  const onInputChange = (e) => {
    console.log("input has changed");
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted with searchterm ", searchTerm);

    //if statement checks if searchTerm has a value other than null or undefined
    if (searchTerm ?? null) {
      handleSubmit(searchTerm); //Passing the searchTerm to App.jsx
      setSearchTerm(e.target.value);
    } else {
      console.log("There is some prob with search term. It is ", searchTerm);
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
