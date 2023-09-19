import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Dogs = ({ pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('dogs')
  });

  return (
    <PhotoContainer loading={loading} pix={pix} />
  )   

};

export default Dogs;