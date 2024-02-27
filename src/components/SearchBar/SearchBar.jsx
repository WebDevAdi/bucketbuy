import React, { useState } from "react";

function SearchBar({value =''}) {
  const [searchValue, setSearchValue] = useState(value);
  console.log(searchValue);

  const handleSearch = () => {
    window.location.href = `/products/search?q=${searchValue}&page=1`;
  };

  const onSearchInputChange = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }

  };

  console.log(searchValue)
  const handleClearSearchText = () => {
    setSearchValue('')
  }

  return (
    <div className=" max-w-[1000px] mx-auto text-center">
      <div className="">
        <span className="relative">
          <input
            type="text"
            className="border my-2 p-2 w-3/4 rounded-l-full px-14 focus:outline-slate-200"
            placeholder="Search Products..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <span className="absolute top-0 border-r px-3 left-2 text-lg text-slate-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className={`absolute ${searchValue === '' ? 'hidden': ''} flex  justify-center items-center top-1 right-5  text-slate-400`} onClick={handleClearSearchText}>
            <i className="fa-solid fa-x"></i>
          </span>
        </span>
        <button
          disabled={searchValue?.length === 0}
          className="bg-orange-500 p-2 rounded-r-full text-white cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
