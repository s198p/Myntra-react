import React,{ useContext } from "react";
// import {AuthContext} from "../context/AuthContext";

const Cards = ({ item, handleClick }) => {
const { name, strikedoffprice, price, image_url,tags } = item;
// const {isAuthorized} = useContext(AuthContext);


return (
    <div className="card">
    <div className="image_box">
        <img src={image_url} alt="" />
    </div>
    <div className="details">
        <p>{name}</p>
        <p>{tags}</p>
        <p>Price - {price}Rs</p>
        <p>{strikedoffprice}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        
    </div>
    </div>
);
};

export default Cards;

