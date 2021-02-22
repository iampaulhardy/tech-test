import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img 
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa logo">
      </img>
      <Search setSearchResults={setSearchResults}/>
      <SearchResults results={searchResults}/>
    </div>
  );
};

export default App;
