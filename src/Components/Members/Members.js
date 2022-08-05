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
   
  // data.map(d=>console.log(d))
  return (
    <div className="my-5">
      <h2 className="text-center my-5">CLUB MEMBERS</h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col text-center">Name</th>
            <th scope="col  text-center">Email</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member) => (
            <tr>
              
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>Batch</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


