import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";


// Config
import "./css/index.css";
import "./config"

// Components
import SearchForm from "./SearchForm";
import MainNav from "./MainNav";
import PhotoContainer from "./PhotoContainer";

const App = () => {
  return (
    <div class="container">

      <SearchForm />

      <MainNav />

      <PhotoContainer />

    </div>
  );
};

export default App;
