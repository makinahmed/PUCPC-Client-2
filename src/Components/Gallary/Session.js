import React from "react";
import { sessionData } from "../FakeData/sessionData";
import './Gallary.css';
const Session = () => {
  return (
    <div className="container">
      <div className="row">
        {sessionData.map((img) => (
          <div className="col-md-3 g-4 md-6">
            <img
              className="gallery-img"
              style={{ filter: " grayscale(10%)" }}
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;
