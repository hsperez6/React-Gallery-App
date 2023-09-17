import React from "react";

//Testing making changes from my phone

// Config
import "./css/index.css";
import "./config"

// Components
import SearchForm from "./SearchForm";
import MainNav from "./MainNav";
import PhotoContainer from "./PhotoContainer";

const App = () => {
  return (
    <>
      <SearchForm />

      <MainNav />

      <PhotoContainer />
    </>
  );
};

export default App;
