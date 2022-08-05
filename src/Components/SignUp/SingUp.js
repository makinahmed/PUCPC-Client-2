
import React, {useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.initilize";

export default function SingUp() {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [createNewUser, setCreateNewUser] = useState({});
  // const [registrationStatus, setRegistrationStatus] = useState(true);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterUser = { ...createNewUser };
    newRegisterUser[field] = value;
    setCreateNewUser(newRegisterUser);
  };
  // console.log(user, ' I am user!')
  const handleOnSubmit = e => e.preventDefault()
  const handleOnClick = () => {
    // console.log(createNewUser.email, createNewUser.password);
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
        console.log(data);
      });
 
  };
  // useEfc
  // useEffect(() => {
    
  // },[])
  return (
    <div className="d-flex justify-content-center my-5">
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
          <input type="submit"  value="Register" onClick={handleOnClick}  className="mt-3"/>
           
        </form>

        {/* <p>
          Already have an account ? <Link to="/login">login</Link>
        </p>
        {registrationStatus ? (
          ""
        ) : (
          <p className="text-warning">Already have account!</p>
        )} */}
      </div>
    </div>
  );
}
