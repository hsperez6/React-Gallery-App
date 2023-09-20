import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Dogs = ({ title, pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('dogs')
  });

  return (
    <PhotoContainer title={title} loading={loading} pix={pix} />
  )   

};

export default Dogs;