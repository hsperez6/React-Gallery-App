import { useEffect } from "react";
import { useParams } from "react-router-dom";

//CSS
import "./css/index.css";

//Components
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";

const Search = ({ loading, pix, changeQuery, title }) => {

  let { searchTerm } = useParams(); //Gets the term written after "search/"

  console.log(searchTerm)

  useEffect(() => {
    changeQuery(searchTerm);
  });

  if (pix.length > 0) {  //Checks search results and determines which component to render
    return (
      <PhotoContainer title={title} loading={loading} pix={pix} />  //If search returns photos => display photos by rendering Photocontainer component
    );
  } else {
    return (
      <NotFound /> //If search did not return any results, render the No results found message
    )
  }

};

export default Search;