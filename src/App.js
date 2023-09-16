import React from "react";

import "./css/index.css";







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
