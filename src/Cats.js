import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Cats = ({ pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('cats')
  });

  return (
    <PhotoContainer loading={loading} pix={pix} />
  )   

};

export default Cats;