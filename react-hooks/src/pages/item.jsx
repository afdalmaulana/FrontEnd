import React from "react";
import Card from "../components/card";
import Header from "../components/keader";
import { Link } from "react-router-dom";

export default function Item () {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Card
          brand="sendok"
          price={5000}
          pic="https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80"
          desc="ini sendok"
        />
        <Card
          brand="garpu"
          price={3000}
          pic="https://plus.unsplash.com/premium_photo-1668081838518-7c3aff711bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80"
          desc="ini garpu"
        />
      </div>
      <Link to={"/"}>Go to Landing</Link>
    </div>
  );
};