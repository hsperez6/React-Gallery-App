import { useEffect } from "react";
import { useParams } from "react-router-dom";

//CSS
import "./css/index.css";

//Components
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";

const Search = ({ loading, pix, changeQuery, title }) => {

  let { searchTerm } = useParams(); //Gets the term written after "search/" in the address bar URL

  useEffect(() => {
    changeQuery(searchTerm);
  });

  if(loading) { // If fetching data from API and awaiting response, render loading... message
    return (
      <h2>Loading...</h2>
    )
  } else  if (!loading && pix.length > 0) {  //Checks search results and determines which component to render
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