import React from "react";
import Contest22 from "../../Gallary/Contest22";
import Fest from "../../Gallary/Fest";
import Session from "../../Gallary/Session";

const Gallery = () => {
  return (
    <div className="mb-5">
        <h1 className="text-center my-5 ">Our Gallery</h1>
      <Contest22 />
      <Fest />
      <Session />
    </div>
  );
};

export default Gallery;
