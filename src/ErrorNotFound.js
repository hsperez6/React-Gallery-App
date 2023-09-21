import React from "react";

import "./css/index.css";

const ErrorNotFound = ({ title }) => {

  return (
    
    <div>
      <h2>{title}</h2> {/* Friendly 404 message */}
      <h2>Page Not Found</h2>
    </div>
  )

}

export default ErrorNotFound;