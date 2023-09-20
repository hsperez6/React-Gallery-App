import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Cats = ({ title, pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('cats')
  });

  return (
    <>
    <PhotoContainer title={title} loading={loading} pix={pix} />

    </>
  )   

};

export default Cats;