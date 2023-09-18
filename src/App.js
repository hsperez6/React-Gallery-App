import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

//Testing making changes from my phone

// Config
import "./css/index.css";
import apiKey from "./config";

// Components
import SearchForm from "./SearchForm";
import MainNav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";

const App = () => {
  const [pix, setPix] = useState([]);
  const [query, setQuery] = useState("sunsets");


  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setPix(response.data.photos.photo));
  }, [query]);

  console.log(pix)

  const handleQueryChange = (searchText) => {
    setQuery(searchText)
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange}/>

      <MainNav changeQuery={handleQueryChange}/>

      <Routes>
        <Route path="/" element={<PhotoContainer pix={pix} />} />
        <Route path="cats" element={<PhotoContainer pix={pix}/>} />
        <Route path="dogs" element={<PhotoContainer />} />
        <Route path="computers" element={<PhotoContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
