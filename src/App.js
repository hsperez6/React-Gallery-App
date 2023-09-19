import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import Dogs from "./Dogs";
import Computers from "./Computers";

const App = () => {
  
  //Hooks
  const [pix, setPix] = useState([]);
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(false);



  //fetch data from flickr API
  useEffect(() => {

    setLoading(true);

    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setPix(response.data.photos.photo))
      .catch((error) => {console.error('Error fetching data', error)})
      .finally(() => {setLoading(false)})
  }, [query]);

  
  //Helper Functions
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };


  //Render
  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange}/>

      <MainNav changeQuery={handleQueryChange} />

      <Routes>
        <Route path="/" element={null} />

        <Route path="search">
          <Route index element={null} />
          <Route path=":searchTerm" element={<PhotoContainer loading={loading} pix={pix}/>} />
        </Route>  

        <Route path="search/cats" element={<Cats loading={loading} changeQuery={handleQueryChange} pix={pix}/>} />
        <Route path="search/dogs" element={<Dogs loading={loading} changeQuery={handleQueryChange} pix={pix}/>} />
        <Route path="search/computers" element={<Computers loading={loading} changeQuery={handleQueryChange} pix={pix}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
