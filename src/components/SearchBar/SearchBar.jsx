import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = () => {
    if (!query) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <header id="header">
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          {...register("query")}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={query}
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster position="top-left" aria-label="Search" />
      </form>
    </header>
  );
};

export default SearchBar;
