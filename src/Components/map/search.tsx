import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({
  searchTerm,
  handleInputChange,
  searchResults,
  handleResultClick,
}: {
  searchTerm: any;
  handleInputChange: any;
  searchResults: any;
  handleResultClick: any;
}) => {
  return (
    <div
      className="position-absolute search_map"
    >
      <div
        className="d-flex align-items-center rounded"
        style={{
          backgroundColor: "white",
          border: "1px solid lightgrey",
          padding: "0.5rem 1rem",
          margin: "0 0.6rem",
          width: "95%",
          borderRadius: "10px !important",
        }}
      >
        <input
          type="text"
          className="border border-0 search_bar_placeholder"
          style={{
            marginLeft: "0.5rem",
            outline: "none",
            width: "100%",
          }}
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search to find business address"
        />
        <BiSearch />
      </div>
      {searchResults.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            backgroundColor: "white",
            color: "black",
            width: "92%",
            marginLeft: "1.4rem",
            maxHeight: "35vh",
            overflowY: "auto",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          {searchResults.map((result: any, index: number) => (
            <>
              <li key={index} onClick={() => handleResultClick(result)}>
                {result.formatted}
              </li>
              <hr />
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
