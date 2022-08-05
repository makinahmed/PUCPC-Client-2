import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://pucpc.herokuapp.com/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div id="teachers-hash-link">
      <h1
        style={{ fontSize: "clamp(2rem,90vw,3rem)" }}
        className="mt-5 text-center"
      >
        Meet The Counselor
      </h1>
      <p className="text-center mb-5 fs-">Meet the counselor of PUCPC</p>
      <Container>
        <Row>
          {teachers.map((teacher) => (
            <Col
              key={teacher.id}
              sm={10}
              md={3}
              className="my-3 mx-auto text-center"
            >
              <div>
                <img className="img-fluid w-50 my-3" src={teacher.img} alt="" />
              </div>
              <h5>{teacher.name}</h5>
              <p>{teacher.position}</p>
              <p>{teacher.email}</p>
              {/* <p>{teacher?.study}</p> */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Teachers;
