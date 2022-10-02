import React,{ useContext } from "react";
import {AuthContext} from "../context/AuthContext";

const Cards = ({ item, handleClick }) => {
const { title, author, price, img } = item;
// const {isAuthorized} = useContext(AuthContext);


return (
    <div className="cards">
    <div className="image_box">
        <img src={img} alt="" />
    </div>
    <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        
    </div>
    </div>
);
};

export default Cards;

