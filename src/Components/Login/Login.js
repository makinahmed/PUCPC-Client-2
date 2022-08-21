import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.initilize";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [loginuser, setloginuser] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginUser = { ...loginuser };
    newLoginUser[field] = value;
    setloginuser(newLoginUser);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginuser.email, loginuser.password);
    fetch(`https://pucpc-api.herokuapp.com/login/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginuser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("");
      });
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div
      className="d-flex justify-content-center my-5"
      style={{ height: "450px" }}
    >
      <div>
        <h2 className="mt-3">Please Login here</h2>
        <form>
          <label className="mt-3" htmlFor="email">
            Your Email:{" "}
          </label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <label className="mt-3" htmlFor="password">
            Password:{" "}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
          />{" "}
          <br />
          <button onClick={handleOnClick} className="mt-3">
            Log In
          </button>
        </form>
        <p>
          Don't have an account ? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
}
