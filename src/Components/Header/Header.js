import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

import logo from '../../logo.png';
const Header = () => {
//  const user = 5
//  const signOutUser = 5
  // const { user, signOutUser } = useAuth();
  // console.log(user, ' user from header');
 
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
            {/* {user.email && ( */}
              <Nav>
                <Link
                  className="text-white text-decoration-none p-3"
                  to="/members"
                >
                  Members
                </Link>
              </Nav>
            {/* )} */}
            {/* {user.email ? ( */}
              <Nav>
                <button
                  className="text-dark text-decoration-none p-3"
                  // onClick={signOutUser}
                >
                  Log Out
                </button>
              </Nav>
            {/* ) : ( */}
              <Nav>
                <Link
                  className="text-white text-decoration-none p-3"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </Nav>
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
