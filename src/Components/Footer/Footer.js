import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-md-4 text-center">
          <h2>About Us</h2>
          <p>
            PUCPC is the most primitive and extensive club of our University. We
            work together to explore every field of Computer Science. Join us to
            know more.
          </p>
        </div>
        <div className="col-md-2  text-center">
          <h2>Resources</h2>
          <div>
            <a
              className="text-white"
              href="https://www.youtube.com/c/anisulislamrubel"
              target="_blank"
              rel="noreferrer"
            >
              Anisul Islam
            </a>
          </div>
          <div>
            <a
              className="text-white"
              href="https://www.youtube.com/c/AhsanRadit"
              target="_blank"
              rel="noreferrer"
            >
              Ahsan Radit
            </a>
          </div>
          <div>
            <a
              className="text-white"
              href="http://cpbook.subeen.com/?_ga=2.96265820.1566888664.1650385431-1967783221.1648899832"
              target="_blank"
              rel="noreferrer"
            >
              C Programming Resource
            </a>
          </div>
        </div>
        <div className="col-md-3 site-nav text-center">
          <h2>Site Navigation</h2>
          <ul className="site-navigation">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <Link to="/contact">
                <a href="/">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3  text-center">
          <h2>Stay Connected</h2>

          <a
            href="https://www.facebook.com/CPCPrimeUniversity/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faFacebook}
              className="p-3 fs-1"
            />
          </a>

          <a href="/" target="_blank">
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faTwitter}
              className="p-3 fs-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prime-university-computer-programming-club-7539a4229/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faLinkedin}
              className="p-3 fs-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
