import React from "react";
import "./search-box.styles.css";
export const SearchBox = ({ placeholder, onChangeHandler }) => {
  //setState is asynchronous event.
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
