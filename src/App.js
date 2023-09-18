import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

// Config
import "./css/index.css";
import apiKey from "./config";

// Components
import SearchForm from "./SearchForm";
import MainNav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import Cats from "./Cats";

const App = () => {
  
  //Hooks
  const [pix, setPix] = useState([]);
  const [query, setQuery] = useState();
  const navigate = useNavigate();


  //fetch data from flickr API
  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setPix(response.data.photos.photo));
  }, [query]);

  
  //Helper Functions
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
    navigate(`search/${searchText}`);
  };


  //Render
  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange}/>

      <MainNav />

      <Routes>
        <Route path="/" element={null} />

        <Route path="search">
          <Route index element={null} />
          <Route path=":searchTerm" element={<PhotoContainer pix={pix}/>} />
        </Route>  

        <Route path="cats" element={<Cats changeQuery={handleQueryChange} pix={pix}/>} />
        <Route path="dogs" element={<PhotoContainer pix={pix}/>} />
        <Route path="computers" element={<PhotoContainer pix={pix}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
