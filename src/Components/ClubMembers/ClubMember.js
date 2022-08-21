import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ClubMembers from "./ClubMembers";

const ClubMember = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("https://pucpc-api.herokuapp.com/team")
      .then((res) => res?.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <>
      <h1
        style={{ fontSize: "clamp(2rem,90vw,3rem)" }}
        className="mt-5 text-center"
      >
        Meet The Team
      </h1>
      <p className="text-center fs-4 mb-5">Meet the core member of PUCPC</p>
      {members ? (
        <Container id="team-hash-link">
          <Row>
            <Col sm={12} className="text-center w-50 mx-auto">
              <ClubMembers key={members[0]} clubMember={members[0]} />
            </Col>
          </Row>
          <Row>
            {members.slice(1, 3).map((a) => (
              <Col sm={12} md={4} className="text-center mx-auto my-5">
                <ClubMembers key={a.id} clubMember={a} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12} className="text-center  w-50 mx-auto">
              <ClubMembers key={members[3]} clubMember={members[3]} />
            </Col>
          </Row>
          <Row>
            {members.slice(4, 9).map((a) => (
              <Col sm={12} md={4} className="text-center mx-auto my-5">
                <ClubMembers key={a.id} clubMember={a} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12} className="text-center  w-50 mx-auto">
              <ClubMembers key={members[9]} clubMember={members[9]} />
            </Col>
          </Row>
          <Row>
            {members.slice(10, 17).map((a) => (
              <Col sm={12} md={4} className="text-center mx-auto my-5">
                <ClubMembers key={a.id} clubMember={a} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <div>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </>
  );
};

export default ClubMember;
