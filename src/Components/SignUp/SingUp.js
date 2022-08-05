
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.initilize";

export default function SingUp() {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [createNewUser, setCreateNewUser] = useState({});
  const [status,setStatus] = useState(false)
const navigate = useNavigate();
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterUser = { ...createNewUser };
    newRegisterUser[field] = value;
    setCreateNewUser(newRegisterUser);
  };
  if (user) {
    navigate("/home")
  } 
  const handleOnSubmit = e => e.preventDefault()
  const handleOnClick = () => {
    createUserWithEmailAndPassword(createNewUser.email,createNewUser.password);
    fetch(`http://localhost:8000/signup/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createNewUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 400) {
          setStatus(true)
        } else {
          setStatus(false)
        }
      });
  };

  return (
    <div
      className="d-flex justify-content-center my-5"
      style={{ height: "450px" }}
    >
      <div>
        <h2>Please Registration here</h2>
        <form onSubmit={handleOnSubmit}>
          <label className="mt-3" htmlFor="name">
            Name:{" "}
          </label>
          <br />
          <input
            onChange={handleChange}
            type="name"
            name="name"
            placeholder="Enter your name"
          />{" "}
          <br />
          <label className="mt-3" htmlFor="name">
            Batch:{" "}
          </label>
          <br />
          <input
            onChange={handleChange}
            type="batch"
            name="batch"
            placeholder="Enter your batch"
          />{" "}
          <br />
          <label className="mt-3" htmlFor="name">
            ID:{" "}
          </label>
          <br />
          <input
            onChange={handleChange}
            type="id"
            name="id"
            placeholder="Enter your id"
          />{" "}
          <br />
          <label className="mt-3" htmlFor="email">
            Email:{" "}
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
          <input
            type="button"
            value="Register"
            onClick={handleOnClick}
            className="mt-3"
          />
        </form>

        <p>
          Already have an account ? <Link to="/login">login</Link>
        </p>
        {status ? <p className="text-warning">Already have account!</p> : ""}
      </div>
    </div>
  );
}
