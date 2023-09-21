import React from "react";

import "./css/index.css";

const NotFound = () => { //If query does not return any results, display the following message

  return (
    
    <div className="photo-container">
      <h2>No Results Found</h2>
      <p>Your search did not return any results. Please try again.</p>    
    </div>
  )

}

export default NotFound;