import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className={css.searchBox}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          {...register("query")}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={query}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
