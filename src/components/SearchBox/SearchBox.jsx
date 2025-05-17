import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name || "");

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchContainer}>
      <label className={s.findLabel} htmlFor="searchInput">
        Find me by name
        <input
          className={s.searchField}
          type="text"
          value={filter}
          onChange={handleChange}
          id="searchInput"
        />
      </label>
    </div>
  );
};

export default SearchBox;
