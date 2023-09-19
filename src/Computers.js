import React, { useEffect } from "react";

import "./css/index.css";

import PhotoContainer from "./PhotoContainer";

const Computers = ({ pix, changeQuery, loading }) => {

  useEffect(() => {
    changeQuery('computers')
  });

  return (
    <PhotoContainer loading={loading} pix={pix} />
  )   

};

export default Computers;