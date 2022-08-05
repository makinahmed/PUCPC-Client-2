import React from "react";

const ClubMembers = (props) => {
  return (
    <>
      <div className="w-50 mx-auto">
        <img className="w-50 my-3" src={props?.clubMember?.img} alt="" />
      </div>
      <h5>{props?.clubMember?.name}</h5>
      <p>{props?.clubMember?.position}</p>
    </>
  );
};

export default ClubMembers;
