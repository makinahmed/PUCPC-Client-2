import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Gallary.css";
const Gallary = () => {
  return (
    <>
      <h1 style={{ fontSize: "3.5rem" }} className="mt-5 text-center">
        Gallery
      </h1>
      <p className="text-center fs-3 mb-5 w-90">
        Have a look of our events, contests,seminar and festival
      </p>

      <div className="text-center">
        <button className="btn btn-dark mx-3">
          <Link className="fs-3 m-3 text-decoration-none text-white" to="/fest">
            FEST
          </Link>
        </button>
        <button className="btn btn-dark  mx-3">
          <Link
            className="fs-3 m-3 text-decoration-none text-white"
            to="/contest22"
          >
            Contest22
          </Link>
        </button>
        <button className="btn btn-dark  mx-3">
          <Link
            className="fs-3 m-3 text-decoration-none text-white"
            to="/session"
          >
            Session
          </Link>
        </button>
      </div>

      <Outlet />
    </>
  );
};
export default Gallary;
