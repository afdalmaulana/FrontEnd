import React from "react";

export default function Card(props) {
  //   console.log(props);
  return (
    <div
      className="card"
      style={{ width: "120px", height: "80px", margin: "30px" }}
    >
      <img src={props.pic} alt="mobil" width={"120px"} />
      <div>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};