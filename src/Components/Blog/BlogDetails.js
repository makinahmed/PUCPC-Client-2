import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./blkogDetails.css";

const BlogDetails = () => {
  let { id } = useParams();
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    fetch("https://pucpc-api.herokuapp.com/blog")
      .then((res) => res?.json())
      .then((data) => setSingleBlog(data));
  }, [id]);
  console.log(id);
  const blogItem = singleBlog.filter((item) => item.id === id);
  return (
    <Container className="mt-5">
      <Row>
        <Col className="my-5">
          <h2 className="w-75 mx-auto blog-title">{blogItem[0]?.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="w-50 mx-auto my-5">
          <img className="w-100" src={blogItem[0]?.img} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className=" text-center my-5 mx-auto lh-lg">
          <p className="w-75 mx-auto blog-description">
            {blogItem[0]?.description}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;
