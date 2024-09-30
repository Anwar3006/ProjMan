import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = () => {
  return (
    <div className="relative flex h-min w-[200px] ml-4">
      <SearchOutlinedIcon className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
      <input
        type="search"
        className="bg-gray-100 rounded-lg p-2 pl-8 border-none placeholder-gray-500 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-white/70"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
