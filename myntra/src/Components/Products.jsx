import React from "react";
import Mendata from "../Data/Mendata";
import Card from "./Card";
import "../css/Men.css";
// import "../styles/amazon.css";

const Products = ({ handleClick }) => {
  return (
    <section>
      {Mendata.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Products;