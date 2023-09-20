import React from "react";

import "./css/index.css";

const PhotoContainer = ({ title, loading, pix }) => {
  
  return (
    <div className="photo-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{title}</h2>
          <ul>
            {pix.map((pic) => (
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