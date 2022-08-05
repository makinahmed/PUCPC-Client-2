import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function Members() {
    const [members, setMembers] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:8000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
   
  return (
    <div className="my-5 mx-auto w-75">
      <h2 className="text-center my-5">List Of Official Members</h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col text-center">Name</th>
            <th scope="col  text-center">Email</th>
            <th scope="col">Batch</th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member) => (
            <tr>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member?.id}</td>
              <td>{member?.batch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


