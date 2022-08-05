import React, { useEffect, useState } from "react";
import "./Gallary.css";

const Contest22 = () => {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    fetch("/gallaryData.JSON")
      .then((res) => res.json())
      .then((data) => setGalleryData(data?.contest1));
  }, []);

  return (
    <>
     
      <div className="container">
        <div className="row">
          {galleryData?.slice(10, 30).map((a) => (
            <div key={a?.id} className="col-md-3 g-4 md-6">
              <img
                className="gallery-img"
                style={{ filter: " grayscale(10%)" }}
                src={a?.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Contest22;
