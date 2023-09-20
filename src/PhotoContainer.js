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
                <img
                  src={`https://live.staticflickr.com/${pic.id}/${pic.id}_${pic.secret}_m.jpg`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PhotoContainer;

/**
https://live.staticflickr.com/${pic.id}/${pic.id}_${pic.secret}_t.jpg


farm: 66
id: "53194130589"
isfamily: 0
isfriend: 0
ispublic: 1
owner: "33674796@N04"
secret: "18b0bfc6cf"
server: "65535"
title: "Desk Clock and Stamp holder"

          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
          </li>

 */
