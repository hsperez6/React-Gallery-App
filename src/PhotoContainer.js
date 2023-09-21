import React from "react";

import "./css/index.css";

const PhotoContainer = ({ title, loading, pix }) => {

  return (
    <div className="photo-container">
      {loading ? (
        <h2>Loading...</h2> // Renders a loading... message while fetching the data
      ) : (
        <>
          <h2>{title}</h2>
          <ul>
            {pix.map((pic) => ( // Iterates through the pix array and returns a list item with a key attribute along with each image 
              <li key={pic.id}>
                <img src={`https://live.staticflickr.com/${pic.id}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PhotoContainer;