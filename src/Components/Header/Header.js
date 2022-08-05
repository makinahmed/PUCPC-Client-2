import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import auth from "../Firebase/firebase.initilize";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="logo-hash-link"
      >
        <Container>
          <Link style={{ display: "inline-block" }} to="/home">
            <img style={{ width: "100px" }} src={logo} alt="" />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="text-white text-decoration-none p-3"
                to="/gallary"
              >
                GALLARY
              </Link>
              <Link className="text-white text-decoration-none p-3" to="/team">
                TEAM
              </Link>
              <Link
                className="text-white text-decoration-none p-3"
                to="/teachers"
              >
                TEACHERS
              </Link>
            </Nav>
            <Nav>
              <Link className="text-white text-decoration-none p-3" to="/blog">
                BLOG
              </Link>
            </Nav>
            {user?.email && (
              <Nav>
                <Link
                  className="text-white text-decoration-none p-3"
                  to="/members"
                >
                  Members
                </Link>
              </Nav>
            )}
            {user?.email ? (
              <Nav>
                <Link
                to="/"
                  className=" text-white fs-5 text-decoration-none p-3"
                  onClick={() => signOut(auth)}
                >
                  Log Out
                </Link>
              </Nav>
            ) : (
              <Nav>
                <Link
                  className="text-white text-decoration-none p-3"
                  to="/signup"
                >
                  {user?.email}
                  Sign Up
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
