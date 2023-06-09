import React from "react";
import { Card } from "../components/card";
import { Header } from "../components/keader";
import { Link } from "react-router-dom";

export default function Landing (){
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Card
          brand="fiat"
          price={500000}
          pic="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        />
        <Card
          brand="bmw"
          price={300000}
          pic="https://images.unsplash.com/photo-1683429869300-86ec5fdce9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <Link to={"/item"}>Go to Item</Link>
    </div>
  );
};