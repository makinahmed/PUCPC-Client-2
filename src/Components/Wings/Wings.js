import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Wings.css";
const Wings = () => {
  const [wingsData, setWingsData] = useState([]);
  useEffect(() => {
    fetch("https://pucpc-api.herokuapp.com/wing")
      .then((res) => res.json())
      .then((data) => setWingsData(data));
  }, []);
  return (
    <div className="container wings-container " id="wings-hash-link">
      <div className="row g-5">
        {wingsData.map((data) => (
          <div className="col-md-3 wings-card p-5">
            <Card style={{ width: "18rem", height: "15rem" }}>
              <Card.Body style={{ backgroundColor: "black" }}>
                <Card.Title style={{ color: "white" }}>{data.title}</Card.Title>
                <Card.Text
                  className="my-3 wings-text"
                  style={{ color: "white" }}
                >
                  {data.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wings;
