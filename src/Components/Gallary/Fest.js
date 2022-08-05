import React  from "react";
import { cseFest } from "../FakeData/cseFestData";


const Fest = () => {
  
  return (
    <div className="container">
      <div className="row">
        {cseFest.map((img) => (
          <div  className="col-md-3 g-4 md-6">
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

export default Fest;
