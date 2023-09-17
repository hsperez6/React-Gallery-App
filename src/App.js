import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, Link, NavLink } from "react-router-dom";
import axios from "axios";

//Testing making changes from my phone

// Config
import "./css/index.css";
import "./config";

// Components
import SearchForm from "./SearchForm";
import MainNav from "./MainNav";
import NotFound from "./NotFound";
import PhotoContainer from "./PhotoContainer";

const App = () => {
  const [pix, setPix] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f0a445cac7cd4216aa23249c9842709&text=cats&per_page=24&page=1&format=json&nojsoncallback=1"
      )
      .then((response) => setPix(response.data.photos.photo));
  }, []);

  console.log(pix)


  return (
    <div className="container">
      <SearchForm />

      <MainNav />

      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="cats" element={<PhotoContainer />} />
        <Route path="dogs" element={<PhotoContainer />} />
        <Route path="computers" element={<PhotoContainer />} />
      </Routes>
    </div>
  );
};

export default App;
