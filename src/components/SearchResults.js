import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
