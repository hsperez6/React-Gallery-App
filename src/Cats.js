import React from "react";

import "./css/index.css";

const Cats = ({ pix, changeQuery }) => {

  return (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {pix.map(pic =>
            <li key={pic.id}>
              <img src={`https://live.staticflickr.com/${pic.id}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
            </li>
          )}
        </ul>
      </div>
  );

};

export default Cats;