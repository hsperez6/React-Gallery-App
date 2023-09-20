import { useEffect } from "react";

import "./css/index.css";
import { useParams } from "react-router-dom";

import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";



const Search = ({ loading, pix, changeQuery, title }) => {

  let { searchTerm } = useParams();

  useEffect(() => {
    changeQuery(searchTerm)
  });

  if (pix.length > 0) {
    return (
      <PhotoContainer title={title} loading={loading} pix={pix} />
    );
  } else {
    return (
      <NotFound />
    )
  }

};

export default Search;