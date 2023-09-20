import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Computers = ({ title, pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('computers')
  });

  return (
    <PhotoContainer title={title} loading={loading} pix={pix} />
  )   

};

export default Computers;