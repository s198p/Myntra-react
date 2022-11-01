import React,{ useContext } from "react";
import "../css/Men.css";
// import {AuthContext} from "../context/AuthContext";

const Cards = ({ item, handleClick }) => {
const { name, strikedoffprice, price, image_url,tags } = item;
// const {isAuthorized} = useContext(AuthContext);


return (
    
        <div className="card">
            <div className="productImg">
                <img src={image_url} alt="" />
            </div>
            <div className="productInfo">
                <p className="productName">{name}</p>
                <p className="productTags">{tags}</p>
                <p className="productPrice">Price - {price}Rs</p>
                <p className="productStrikePrice">{strikedoffprice}</p>
                <button onClick={() => handleClick(item)} className="cartBtn"
                >Add to Cart</button>
            </div>
        </div>
    

);
};

export default Cards;

