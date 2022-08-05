import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("https://pucpc.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);
  return (
    <>
      <h1
        id="blog-hash-link"
        style={{ fontSize: "3.5rem" }}
        className="my-5 text-center"
      >
        Blog
      </h1>
      <div className="container ">
        <div className="row g-5 mx-auto">
          {blogData.map((data) => (
            <div className="col col-md-4">
              <Card style={{ width: "18rem", height: "25rem" }}>
                <Card.Img variant="top" className="blog-card" src={data.img} />
                <Card.Body>
                  <Card.Title className="text-center ">
                    <h5 className="fw-bold">{data.title}</h5>
                  </Card.Title>
                  <Card.Text className="lh-lg">
                    {data.description.slice(0, 120)}
                    <Link
                      className="text-black "
                      variant="primary"
                      to={`${data.id}`}
                    >
                      See Details
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
