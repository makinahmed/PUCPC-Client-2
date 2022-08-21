import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
const Slider = (props) => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch("https://pucpc-api.herokuapp.com/slider")
      .then((res) => res.json())
      .then((data) => setSliderData(data[0]?.images));
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div className="slider-text text-center">
        <h1 className="slider-title"> Welcome to prime University</h1>
        <h1 className="slider-title"> Computer Programming Club </h1>
      </div>
      <Carousel>
        {sliderData?.map((obj) => (
          <Carousel.Item className="carousel-item" key={obj.id} interval={2000}>
            <img
              className="d-block mx-auto slider-img"
              src={obj.img}
              alt="Slider"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
